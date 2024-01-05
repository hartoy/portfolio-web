import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Marquee from './Components/Marquee'
import Works from './Components/Works'
import About from './Components/About'
import Contact from './Components/Contact'
import Hobbies from './Components/Hobbies'
import Footer from './Components/Footer'
import 'tailwindcss/tailwind.css'

function App() {
  return (
    <div id="lopo" className="lopo h-screen ">
      <Navbar />
      <Home />
      <Marquee />
      <Works />
      <About />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
