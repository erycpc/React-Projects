import './App.css'
import Quote from './components/Quote'
import { useState } from 'react'

const quotes = [
  { id: 1, text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { id: 2, text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
  { id: 3, text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { id: 4, text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { id: 5, text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { id: 6, text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
]

function App() {
  // track which quote is currently being displayed
  const [currentIndex, setCurrentIndex] = useState(0)
  // Track whether the quote has been copied
  const [copied, setCopied] = useState(false)

  const handleNewQuote = () => {
    // Generate a random index different from the current one
    let newIndex
    // loop to guarantee a different quote is selected
    do {
      newIndex = Math.floor(Math.random() * quotes.length)
    } while (newIndex === currentIndex)

    setCurrentIndex(newIndex)
    setCopied(false) // reset copied state when a new quote is generated
  }

  const handleCopyQuote = () => {
    const quote = quotes[currentIndex]
    const quoteText = `${quote.text} - ${quote.author}`
    navigator.clipboard.writeText(quoteText)
      .then(() => {
        setCopied(true) // set copied state to true after successful copy
        setTimeout(() => setCopied(false), 2000) // reset copied state after 2 seconds
      })
      .catch(err => {
        console.error('Failed to copy: ', err)
      })
  }

  return (
    <>
      <h1>Quote Generator</h1>
      <div className="quote-container">
        <Quote text={quotes[currentIndex].text} author={quotes[currentIndex].author} />
        <button onClick={handleNewQuote}>New Quote</button>
        <button onClick={handleCopyQuote}>{copied ? 'Copied!' : 'Copy'}</button>
      </div>
    </>
  )
}

export default App