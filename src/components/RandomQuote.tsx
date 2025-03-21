import { useSelector } from "react-redux";
import { RootState } from "../store";

const RandomQuote = () => {
  const {
    quote: fetchedQuote,
    isLoading,
    error,
  } = useSelector((state: RootState) => state.quote);
  // format quote as some quotes have each word capitalized
  const formattedQuote =
    fetchedQuote.charAt(0).toUpperCase() + fetchedQuote.slice(1).toLowerCase();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong fetching the quote...</div>;
  }

  return (
    <div className="random-quote drop-shadow-lg p-6 relative z-10 w-full mx-auto text-white text-2xl flex justify-center">
      "{formattedQuote}"
    </div>
  );
};

export default RandomQuote;
