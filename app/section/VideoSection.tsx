"use client";
import VideoPlayer from "../components/videoplayer";
import VideoList from "../components/videolist";
import { useState } from "react";

export default function VideoSection() {
  const [src, setSrc] = useState("");
  const changeVideo = (src: string) => {
    setSrc(src);
  };
  const videos = [
    { id: "https://www.youtube.com/embed/y5PW7rqXUhk", name: "tsuisou" },
    { id: "https://www.youtube.com/embed/hIQ-RrU_r7M", name: "la soldier" },
    { id: "https://www.youtube.com/embed/lk8BMgl9vp0", name: "take over" },
    { id: "https://www.youtube.com/embed/uz9NT98_ulk", name: "Bloody Stream" },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      {src === "" ? (
        "Select a video from the list"
      ) : (
        <VideoPlayer src={src}></VideoPlayer>
      )}

      <VideoList setVideo={changeVideo} items={videos}></VideoList>
    </div>
  );
}
