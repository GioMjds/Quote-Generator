/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import QuoteBox from './components/QuoteBox';
import './index.scss';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState('');
  const [currentAuthor, setCurrentAuthor] = useState('');
  const [color, setColor] = useState('#333');

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
      const data = await response.json();
      setQuotes(data.quotes);
      getQuote(data.quotes);
    } catch (e) {
      console.error(`Error fetching quotes: ${e}`);
    }
  };

  const getRandomQuote = quotesData => {
    return quotesData[Math.floor(Math.random() * quotesData.length)];
  };

  const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  const getQuote = (quotesData = quotes) => {
    let randomQuote = getRandomQuote(quotesData);

    setCurrentQuote(randomQuote.quote);
    setCurrentAuthor(randomQuote.author);

    setColor(getRandomColor());
  }

  return (
    <div style={{ backgroundColor: color, transition: 'background-color 1s' }}>
      <div className="wrapper">
        <QuoteBox
          quote={currentQuote}
          author={currentAuthor}
          getNewQuote={() => getQuote()}
          color={color}
        />
        <div className="footer">
          &copy; {new Date().getFullYear()} | GioMjds
        </div>
      </div>
    </div>
  )
}

export default App
