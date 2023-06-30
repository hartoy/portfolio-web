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
    <div className="lopo h-screen ">
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

// //Navbar
// 1. logo izq
// 2. idiomas derecha
// 3. que se quede fija arriba cuando haces scroll

// //home
// 1.titulo grande
// 2. carrusel con mi imagen
// 3. animar

// //Proyectos
// 1.titulos
// 2.imagenes

// //Form contact
// 1.cambiar color en focus
// 2.usar el motion.div con el form y hacerlo aparecer de la derecha
// 3. agregar bg al form
// 4. que mande el mail
// 5. estilo boton y el trabajemos juntos
// 6. titulo arriba about
