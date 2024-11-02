/* eslint-disable react/prop-types */

const QuoteAuthor = ({ author }) => {
  return (
    <div className="quote-author">
        - <span>{author}</span>
    </div>
  )
}

export default QuoteAuthor