import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Posts from './components/posts/Posts'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Posts />
      </main>
      <Footer />
    </div>
  )
}

export default App
