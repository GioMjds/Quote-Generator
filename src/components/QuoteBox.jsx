/* eslint-disable react/prop-types */
import Button from "./Button"
import QuoteAuthor from "./QuoteAuthor"
import QuoteText from "./QuoteText"

const QuoteBox = ({ quote, author, getNewQuote, color }) => {
  return (
    <div className="quote-box" style={{ color }}>
      <QuoteText text={quote} />
      <QuoteAuthor author={author} />
      <Button getNewQuote={getNewQuote} quote={quote} color={color} />
    </div>
  )
}

export default QuoteBox