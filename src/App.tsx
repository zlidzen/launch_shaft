import { lazy, Suspense } from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const Rocket = lazy(() => import('./pages/Rocket'))
const About = lazy(() => import('./pages/About'))
const ShipDetails = lazy(() => import('./pages/ShipDetails'))

const LoadingFallback = () => <div className="page">Loading...</div>

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rocket" element={<Rocket />} />
            <Route path="/ship/:name" element={<ShipDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
