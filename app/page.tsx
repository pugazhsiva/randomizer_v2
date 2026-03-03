import PlayListBox from "./components/playlistbox";

import VideoSection from "./section/VideoSection";

export default async function Home() {
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
    .then((res) => res.json())
    .then((p) =>
      Promise.all(p.results.map((p) => fetch(p.url).then((res) => res.json()))),
    );

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex-auto min-h-screen w-full max-w-3xl flex-row items-start justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <VideoSection />

        <PlayListBox pokemon={pokemon} />
      </main>
    </div>
  );
}
