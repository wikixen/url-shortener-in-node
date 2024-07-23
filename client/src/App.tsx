import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Form from './components/form'
import Output from './components/output'

export default function App() {

  return (
    <>
      <Navbar />
      <main>
        <Form />
        <Output />
      </main>
      <Footer />
    </>
  )
}
