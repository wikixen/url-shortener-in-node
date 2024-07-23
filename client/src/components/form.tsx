import { ChangeEvent, FormEvent, useState } from 'react'
import axios from 'axios';
import { serverURL } from '../helpers/constant';

export default function Form() {
  const [enteredUrl, setEnteredUrl] = useState<string>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredUrl(e.target.value);
  }
  
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post(`${serverURL}/shorten`, {
        originalUrl: enteredUrl
      })
      setEnteredUrl("")
    } catch (error) {
      console.log(error)
    }
  }  

  return (
    <section className='form-section'>
      <h2 className="title">URL Shortener</h2>
      <form method='post' onSubmit={onSubmit}>
        <label>Enter URL Below:</label>
        <input name='url' type='text' required
          value={enteredUrl}
          onChange={onChange} />
        <button type="submit">Shorten URL</button>
      </form>
    </section>
  )
}