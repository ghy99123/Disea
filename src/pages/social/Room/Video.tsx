import React, { useRef, useEffect } from "react";
import { SingleVideoContainer, VideoEl } from "./style";

export interface IVideoProps {
  stream: MediaStream | null;
  isLocalStream: boolean;
}

export default function Video(props: IVideoProps) {
  const { stream, isLocalStream } = props;

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.srcObject = stream;
      video.onloadedmetadata = () => {
        video.play();
      };
    }
  }, [stream]);

  return (
    <SingleVideoContainer>
      <VideoEl ref={videoRef} autoPlay muted={isLocalStream} />
    </SingleVideoContainer>
  );
}
