import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MyNavbar from './components/MyNavbar'
import Homepage from './components/Homepage'

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
        </div>
        <footer></footer>
      </BrowserRouter>
    </>
  )
}

export default App
