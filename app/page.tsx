"use client"
import VideoPlayer from "./components/videoplayer";
import VideoList from "./components/videolist";
import { useState } from "react";

export default function Home() {
  const [src,setSrc] = useState("")
  const changeVideo= (src:string)=>
  {
    setSrc(src)
  }
  const videos=[{id:"https://www.youtube.com/embed/y5PW7rqXUhk",name:"tsuisou"},{id:"https://www.youtube.com/embed/hIQ-RrU_r7M",name:"la soldier"},{id:"https://www.youtube.com/embed/lk8BMgl9vp0",name:"take over"},{id:"https://www.youtube.com/embed/uz9NT98_ulk",name:"Bloody Stream"}]
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex">
          {src===""?"Select a video from the list":
          <VideoPlayer src={src}></VideoPlayer>}
        </div>
        <div className="flex flex-col items-center gap-2">
          <VideoList setVideo={changeVideo} items={videos}></VideoList>
          </div>
      </main>
    </div>
  );
}
