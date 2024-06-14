import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Marquee from './Components/Marquee'
import Works from './Components/Works'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import 'tailwindcss/tailwind.css'
import HobbiesPage from './Components/HobbiesPage'
import News from './Components/News'

function App() {
  return (
    <div id="lopo" className="lopo h-screen ">
      <Navbar />
      <Home />
      <Marquee />
      <News />
      <Works />
      <About />
      <HobbiesPage />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
