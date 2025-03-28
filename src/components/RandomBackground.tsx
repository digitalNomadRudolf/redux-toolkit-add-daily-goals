export type BackgroundType = {
  id: string;
  urls: {
    regular: string; // URL of the background image
  };
  alt_description: string;
  user: {
    name: string;
    links: {
      html: string;
    };
  };
};

interface RandomBackgroundProps {
  background: BackgroundType;
}

export default function RandomBackground({
  background,
}: RandomBackgroundProps) {
  return (
    <>
      <div className="random-background bg-fixed w-full h-full fixed">
        <img
          src={background?.urls.regular}
          alt={background?.alt_description}
          className="object-cover w-full h-full blur-xs scale-[1.5]"
        />
        <div className="bg-blue-500/40 fixed top-0 w-full h-full"></div>
      </div>
      <div className="photographer p-5 text-center z-1000 bg-blue-100 fixed bottom-0 w-screen">
        Photo from <a href="https://unsplash.com/">Unsplash</a> by{" "}
        <a href={background?.user?.links?.html}>{background?.user?.name}</a>
      </div>
    </>
  );
}
