import { SyntheticEvent, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState<string | null>();
  const url:string = 'http://localhost:5000/api/url/shorten';

  const fetchData = async () => {
    const options: any = {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
        'Authorization':'',
      },
      body: JSON.stringify({
        'longURL':formData
      })
    };
  
    fetch(url, options)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
      })
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    fetchData();
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
