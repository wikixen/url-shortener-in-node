import { SyntheticEvent } from 'react'
import './App.css'

function App() {
  const token = 'bf078593ef1dda073aa1d8fbc970e26b054ea3be'

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    
    const value: any = e.currentTarget

    const formData = new FormData(value)

    fetch('/v4/shorten', {method: value.method, body: formData })
    

  }

  return (
    <main>
      <h1 className="title">URL Shortener</h1>
      <form method='post' onSubmit={handleSubmit}>
        <label>Enter URL Below:</label>
        <input name='url'/>
      </form>
    </main>
  )
}

export default App
