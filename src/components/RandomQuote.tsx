import quotesData from "../data/quotes.json";

const RandomQuote = () => {
  const quotes = quotesData.quotes;
  const randomNum = Math.floor(Math.random() * quotes.length);

  return (
    <div className="random-quote drop-shadow-lg p-6 relative z-10 w-full mx-auto text-white text-2xl flex justify-center">
      {quotes[randomNum].text}
    </div>
  );
};

export default RandomQuote;
