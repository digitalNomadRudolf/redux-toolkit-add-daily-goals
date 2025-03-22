import { useSelector } from "react-redux";
import { RootState } from "../store";

const RandomQuote = () => {
  const { quote, author, isLoading, error } = useSelector(
    (state: RootState) => state.quote
  );
  // format quote as some quotes have each word capitalized
  const formattedQuote =
    quote.charAt(0).toUpperCase() + quote.slice(1).toLowerCase();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong fetching the quote...</div>;
  }

  return (
    <div className="random-quote drop-shadow-lg p-6 relative z-10 w-full mx-auto text-white text-2xl flex flex-col text-center gap-2 justify-center">
      <div className="quote">"{formattedQuote}"</div>
      <div className="author text-base">{author}</div>
    </div>
  );
};

export default RandomQuote;
