import './App.css'
import { useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

type Page = 'home' | 'rocket' | 'about'

function App() {
  const [activePage, setActivePage] = useState<Page>('home')

  return (
    <div className="app">
      <Header activePage={activePage} onNavigate={setActivePage} />
      <main className="main">
        {activePage === 'home' ? (
          <section className="page page-home">
            <div className="home-avatar" aria-hidden="true">
              <img
                className="home-avatar-image"
                src="https://images.evetech.net/characters/2120139145/portrait?tenant=tranquility&size=512"
                alt="EVE Online avatar"
              />
            </div>
            <div className="home-text">
              <p>
                Hi, I'm <span className="home-name">Yulong Smith</span> and I'm a passionate EVE Online player.
              </p>
              <p>I think that missiles are the most versatile and fun weapon system in the game, and I want to share my love for them with you. This website is dedicated to providing you with the best missile fittings, guides, and resources for all your EVE Online needs. Whether you're a beginner or a veteran, you'll find something useful here. </p>
              <p>So buckle up and let's rocket it together!</p>
              <p>If you find that info usefull you may support me by donating some ISK to my character <span className="home-name">Yulong Smith</span> (2120139145). Your support will help me create more content and improve the website. Thank you for visiting and fly safe!</p>
            </div>
          </section>
        ) : null}

        {activePage === 'rocket' ? (
          <section className="page page-rocket">
            <aside className="rocket-nav" aria-label="Rocket categories">
              <button type="button" className="rocket-nav-item">Missiles</button>
              <button type="button" className="rocket-nav-item">Ships</button>
              <button type="button" className="rocket-nav-item">Modules</button>
              <button type="button" className="rocket-nav-item">PvE</button>
              <button type="button" className="rocket-nav-item">PvP</button>
              <button type="button" className="rocket-nav-item">Manufacture</button>
            </aside>
            <div className="rocket-main">
              Main area will be provided later.
            </div>
          </section>
        ) : null}

        {activePage === 'about' ? (
          <section className="page page-about">
            <textarea
              className="about-textarea"
              placeholder="About page text will be provided later."
              defaultValue=""
            />
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  )
}

export default App
