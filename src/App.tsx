import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Rocket from './pages/Rocket'
import About from './pages/About'
import ShipDetails from './pages/ShipDetails'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rocket" element={<Rocket />} />
          <Route path="/ship/:name" element={<ShipDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
