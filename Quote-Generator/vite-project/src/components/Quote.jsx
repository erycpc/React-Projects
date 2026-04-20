function Quote({ text, author }) {
    return (
        <div className="quote">
            <p>{text}</p>
            <cite>{author}</cite>
        </div>
    )
}

export default Quote