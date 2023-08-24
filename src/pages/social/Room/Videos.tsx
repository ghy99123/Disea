import React from "react";
import Video from "./Video";
import { VideoContainer } from "./style";
import { useAppSelector } from "../../../redux/hooks";

export default function Videos() {
  const { localStream, remoteStreams } = useAppSelector((state) => state.room);

  return (
    <VideoContainer>
      <Video stream={localStream} isLocalStream />
      {remoteStreams.map((stream) => (
        <Video key={stream.id} stream={stream} isLocalStream={false} />
      ))}
    </VideoContainer>
  );
}
