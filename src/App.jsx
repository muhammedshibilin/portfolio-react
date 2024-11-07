
import styles from './App.module.css'
import About from './components/about/About'
import { Me } from './components/me/me'
import { Navbar } from './components/NavBar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';




function App() {

  return (
    <>
    <div className={styles.App}>
      <Navbar/>
      <Me/>
    </div>
    <div>
    <About/>
    </div>
    </>
  )
}

export default App
