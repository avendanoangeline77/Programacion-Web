// src/App.jsx
import {Header} from './components/Header'
import {Projects} from './components/Projects'
import {Contact} from './components/Contact'
import {About} from './components/About'
import './index.css'

const App = () => (
  <div  className="color App">
  <Header/>
  <div className='imagen_centrado'>
    <img className='tamaño_imagen' src='./imgs/monta.webp' />
  </div>
  <About/>
  <Projects />
  <Contact />
  </div>
);

export default App;