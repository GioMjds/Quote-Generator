/* eslint-disable react/prop-types */

const Button = ({ getNewQuote, color }) => {
    return (
        <button
            className="button new-quote"
            onClick={getNewQuote}
            style={{ backgroundColor: color }}
        >
            NEW QUOTE
        </button>
    )
}

export default Button