import { SyntheticEvent, useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState<string | null>();
  let url:Response;

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    
    // const enteredURL = new FormData(formData);
    url = await fetch('/v4/shorten', { body: formData })

    return (
      <section className='short-url'>
        {url}
      </section>
    )
  }
  const handleChange = (e: SyntheticEvent) => {
    const value = (e.target as HTMLInputElement).value;
    setFormData(value);
  }
  

  

  return (
    <main>
      <h1 className="title">URL Shortener</h1>
      <form method='post' onSubmit={handleSubmit}>
        <label>Enter URL Below:</label>
        <input name='url' onChange={handleChange} />
        <input type="submit" value="Shorten URL"/>
      </form>

    </main>
  )
}

export default App;
