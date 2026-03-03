export default function VideoPlayer({
  src,
  controls = true,
}: {
  src: string;
  controls?: boolean;
}) {
  return (
    <iframe
      src={src}
      title="Video Player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-128 rounded-lg border-2 border-gray-300"
      //  frameborder="0" 
      referrerPolicy="strict-origin-when-cross-origin" 
      
    />
  );
}
