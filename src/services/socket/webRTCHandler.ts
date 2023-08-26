import Peer from "simple-peer";
import {
  setLocalStream,
  setRemoteStreams,
} from "../../redux/reducers/room/roomSlice";
import { store } from "../../redux/store";
import { signalPeerData } from "./socketConnection";

export type SignalDataType = {
  signal: Peer.SignalData;
  connUserSocketId: string;
};

const onlyAudioConstraints: MediaStreamConstraints = {
  audio: true,
  video: false,
};

const defaultConstraints: MediaStreamConstraints = {
  video: true,
  audio: true,
};

let peers: Record<string, Peer.Instance> = {};

const getConfiguration = () => {
  let turnIceServers = null;
  if (turnIceServers) {
    // TODO: use TURN server credentials
  } else {
    console.log("Using only STUN server");
    return {
      iceServers: [
        {
          urls: "stun:stun.l.google.com:19302",
        },
      ],
    };
  }
};

export const getLocalStreamVideo = (
  onlyAudio: boolean = false,
  callbackFn: () => void
) => {
  const constraints = onlyAudio ? onlyAudioConstraints : defaultConstraints;

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      store.dispatch(setLocalStream(stream));
      callbackFn();
    })
    .catch((err) => {
      console.log("cannot have access to local stream");
      console.log(err);
    });
};

export const prepareNewPeerConnection = (
  connUserSocketId: string,
  isInitiator: boolean
) => {
  const localStream = store.getState().room.localStream;
  if (isInitiator) {
    console.log("prepare new peer connection as initiator");
  } else {
    console.log("prepare new peer connection as non-initiator");
  }

  if (localStream) {
    peers[connUserSocketId] = new Peer({
      initiator: isInitiator,
      config: getConfiguration(),
      stream: localStream,
    });

    peers[connUserSocketId].on("signal", (data) => {
      const signalData = {
        signal: data,
        connUserSocketId,
      };
      // TODO: pass signaling data to other user
      signalPeerData(signalData);
    });

    peers[connUserSocketId].on("stream", (remoteStream: any) => {
      console.log("remote stream came from other user");
      remoteStream.connUserSocketId = connUserSocketId;
      addNewRemoteStream(remoteStream);
    });
  }
};

export const handleSignalingData = (data: SignalDataType) => {
  const { connUserSocketId, signal } = data;

  if (peers[connUserSocketId]) {
    peers[connUserSocketId].signal(signal);
  }
};

export const closeAllConnections = () => {
  try {
    Object.keys(peers).forEach((connUserSocketId) => {
      if (peers[connUserSocketId]) {
        peers[connUserSocketId].destroy();
        delete peers[connUserSocketId];
      }
    });
    console.log(peers);
  } catch (e) {
    console.log("err", e);
  }
};

export const handleParticipantLeftRoom = (connUserSocketId: string) => {
  try {
    if (peers[connUserSocketId]) {
      peers[connUserSocketId].destroy();
      delete peers[connUserSocketId];
    }
    const remoteStreams = store.getState().room.remoteStreams;
    const newRemoteStreams = remoteStreams.filter((remoteStream: any) => {
      return remoteStream.connUserSocketId !== connUserSocketId;
    });
    store.dispatch(setRemoteStreams(newRemoteStreams));
  } catch (e) {
    console.log("error!", e);
  }
};

const addNewRemoteStream = (remoteStream: MediaStream) => {
  const remoteStreams = store.getState().room.remoteStreams;
  const newRemoteStreams = [...remoteStreams, remoteStream];
  store.dispatch(setRemoteStreams(newRemoteStreams));
};

export const switchOutgoingTracks = (stream: MediaStream) => {
  for (const socketId in peers) {
    const oldTracks = peers[socketId].streams[0].getTracks();
    for (const index in oldTracks) {
      for (const index2 in stream.getTracks()) {
        const newTracks = stream.getTracks();
        if (oldTracks[index].kind === newTracks[index2].kind) {
          const oldTrack = oldTracks[index];
          const newTrack = newTracks[index2];
          const stream = peers[socketId].streams[0];
          peers[socketId].replaceTrack(oldTrack, newTrack, stream);
          break;
        }
      }
    }
  }
};
