import Image from "next/image";
import VideoPlayer from "./components/videoplayer";
import VideoList from "./components/videolist";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex">
          <VideoPlayer src="https://www.youtube.com/embed/hIQ-RrU_r7M"></VideoPlayer>
        </div>
        <div className="flex flex-col items-center gap-2">
          <VideoList></VideoList>
          </div>
      </main>
    </div>
  );
}
