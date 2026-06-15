import './App.css'
import Header from './components/header/Header'
import Posts from './components/posts/Posts'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Posts />
      </main>
    </div>
  )
}

export default App
