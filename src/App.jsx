import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MyNavbar from './components/MyNavbar'
import Homepage from './components/Homepage'
import MyFooter from './components/MyFooter'

function App() {
  return (
    <>
      <BrowserRouter>
        <header id="header">
          <MyNavbar />
        </header>
        <div id="overlay">
          <main>
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
            </Routes>
          </main>
          <footer>
            <MyFooter />
          </footer>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
