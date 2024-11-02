/* eslint-disable react/prop-types */

const QuoteText = ({ text }) => {
  return (
    <div className="quote-text">
      <i className="fa fa-quote-left"></i>
      <span>{text}</span>
    </div>
  )
}

export default QuoteText