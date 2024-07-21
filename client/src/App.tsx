import { SyntheticEvent } from 'react'
import './App.css'

function App() {

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    const urlEntered: any = e.currentTarget

    const formData = new FormData(urlEntered)

    fetch('/api/url/shorten', {method: urlEntered.method, body: formData })
  }

  return (
    <main>
      <h1 className="title">Benny's URL Shortener</h1>
      <form method='post' onSubmit={handleSubmit}>
        <label>Enter URL Below:</label>
        <input name='url' />
        <input type="submit" value="Create My Short URL" />
      </form>
    </main>
  )
}

export default App
