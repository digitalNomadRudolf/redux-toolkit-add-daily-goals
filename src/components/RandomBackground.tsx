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
    <div className="random-background bg-fixed w-full h-full fixed">
      <img
        src={url}
        alt={description}
        className="object-cover w-full h-full blur-xs scale-[1.5]"
      />
      <div className="bg-blue-500/40 fixed top-0 w-full h-full"></div>
    </div>
  );
}
