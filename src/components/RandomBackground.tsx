// takes and displays a background
type BackgroundType = {
  id: number;
  url: string;
  description: string;
};

interface RandomBackgroundProps {
  background: BackgroundType;
}

export default function RandomBackground({
  background,
}: RandomBackgroundProps) {
  const { description, url } = background;
  return (
    <div className="random-background bg-fixed bg-transparent w-full h-full fixed">
      <img
        src={url}
        alt={description}
        className="object-cover w-full h-full blur-xs scale-[1.5]"
      />
    </div>
  );
}
