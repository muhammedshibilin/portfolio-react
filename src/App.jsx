
import styles from './App.module.css'
import { Me } from './components/me/me'
import { Navbar } from './components/NavBar/Navbar'


function App() {

  return (
    <>
    <div className={styles.App}>
      <Navbar/>
      <Me/>
    </div>
    </>
  )
}

export default App
