// src/App.jsx
import {Header} from './components/Header'
import {Projects} from './components/Projects'
import {Contact} from './components/Contact'
import {About} from './components/About'
import './index.css'

const App = () => (
  <div className="App">
  <Header/>
  <About/>
  <Projects />
  <Contact />
  </div>
);

export default App;