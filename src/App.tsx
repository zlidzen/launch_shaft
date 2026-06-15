import './App.css'
import { useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

type Page = 'home' | 'rocket' | 'about'
type RocketSection = 'how-it-works' | 'comparison-table'

function App() {
  const [activePage, setActivePage] = useState<Page>('home')
  const [activeRocketSection, setActiveRocketSection] = useState<RocketSection>('how-it-works')

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
              <p className="rocket-nav-label">Missiles</p>
              <div className="rocket-subnav" aria-label="Missile subsections">
                <button
                  type="button"
                  className={activeRocketSection === 'how-it-works' ? 'rocket-nav-item rocket-nav-child active' : 'rocket-nav-item rocket-nav-child'}
                  onClick={() => setActiveRocketSection('how-it-works')}
                >
                  How it works
                </button>
                <button
                  type="button"
                  className={activeRocketSection === 'comparison-table' ? 'rocket-nav-item rocket-nav-child active' : 'rocket-nav-item rocket-nav-child'}
                  onClick={() => setActiveRocketSection('comparison-table')}
                >
                  Comparison table
                </button>
              </div>
              <button type="button" className="rocket-nav-item">Ships</button>
              <button type="button" className="rocket-nav-item">Modules</button>
              <button type="button" className="rocket-nav-item">PvE</button>
              <button type="button" className="rocket-nav-item">PvP</button>
              <button type="button" className="rocket-nav-item">Manufacture</button>
            </aside>
            <div className="rocket-main">
              {activeRocketSection === 'how-it-works' ? (
                <section className="rocket-panel">
                  <h2>How it works</h2>
                  <p> Based on <a href="https://wiki.eveuniversity.org/Missiles" target="_blank" rel="noopener noreferrer">wiki.eveuniversity</a></p>
                  <p>
                    Missiles are guided weapons: they travel toward the target, then apply damage when they impact.
                    Their damage is shaped by missile type, explosion radius, explosion velocity, target signature,
                    and target speed.
                  </p>
                  <p>
                    That makes missiles flexible across many ship classes, but different missiles shine in different
                    situations. Smaller missiles are better at hitting smaller, faster targets, while larger missiles
                    trade application for raw damage.
                  </p>
                  <p>
                    Missiles have several characteristics: flight time, explosion radius, explosion velocity, and damage type.
                    These characteristics determine how effective a missile is against a given target.
                  </p>
                  <h3>Damage type</h3>
                  <p>
                    Damage type is determined by the missile type, while the other characteristics are determined by the missile size.
                    Damage type can be <strong><span className="damage-em">EM</span>, <span className="damage-thermal">Thermal</span>, <span className="damage-kinetic">Kinethic</span>, or <span className="damage-explosive">Explosive</span></strong>.
                    It is important in 2 cases:
                  </p>
                  <ul>
                    <li>First you need to choose damage type for enemy resists - example, enemy has low resist to <span className="damage-em">EM damage</span> - we load Mjolnir missiles (<span className="damage-em">EM damage</span>) to deal more damage.</li>
                    <li>Second, your ship has bonus to special damage for example Corax has bonus to <span className="damage-kinetic">Kinethic damage</span> - we load Scourge missiles (<span className="damage-kinetic">Kinethic damage</span>) to deal more damage.</li>
                  </ul>
                  <p>
                    <span className="damage-thermal">Inferno &#x2192; Thermal</span></p>
                    <p>
                    <span className="damage-em">Mjolnir &#x2192; EM</span></p>
                    <p>
                    <span className="damage-explosive">Nova &#x2192; Explosive</span></p>
                    <p>
                    <span className="damage-kinetic">Scourge &#x2192; Kinetic</span>
                  </p>
                  <h3>Flight time and Velocity</h3>
                  <p>
                    Combination of flight time and velocity determines how long it takes for a missile to reach its target.
                     Also it impacts distance at which missile can hit the target - if target moves faster than missile.
                     This is important because the longer a missile takes to reach its target, 
                     the more time the target has to move and potentially evade the missile. Faster missiles are better at hitting fast-moving targets,
                      while slower missiles can be more effective against slower targets.
                  </p>
                  <h3>Explosion radius and velocity (application)</h3>
                  <p>
                    In general, missiles are a simpler weapon system to use than turrets. But while a missile can apply up to 100% of the Base Damage to a ship in some situations, damage is often reduced by two factors:
                  </p>
                  <ul>
                    <li>If the target ship is moving faster than the explosion velocity of the missile. Think of this as a fast ship being able to somewhat outrun the explosion.</li>
                    <li>If the signature radius of the target ship is smaller than the missile's explosion radius. Think of this as a small ship flying through a large explosion and only being hit by a part of it.</li>
                  </ul>
                  <p>
                    In other words, missile weapons are best at doing damage to larger, slower targets at longer range. This is not to say that a pilot cannot kill small, fast targets with the right missiles, or that there are no short range missile boats. Rather, the most common applications of launcher fitted ships tend to be as longer ranged, heavy damage weapons.
                  </p>
                </section>
              ) : null}

              {activeRocketSection === 'comparison-table' ? (
                <section className="rocket-panel">
                  <h2>Comparison table</h2>
                  <div className="table-wrapper" role="region" aria-label="Missile comparison table" tabIndex={0}>
                    <table className="comparison-table">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Best against</th>
                          <th>Range</th>
                          <th>Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Light Missile</td>
                          <td>Small targets</td>
                          <td>Long</td>
                          <td>Good application, low raw damage</td>
                        </tr>
                        <tr>
                          <td>Heavy Missile</td>
                          <td>Medium targets</td>
                          <td>Long</td>
                          <td>Balanced damage and range</td>
                        </tr>
                        <tr>
                          <td>Heavy Assault Missile</td>
                          <td>Close-range brawling</td>
                          <td>Short</td>
                          <td>High damage, strong in scrappy fights</td>
                        </tr>
                        <tr>
                          <td>Cruise Missile</td>
                          <td>Large targets</td>
                          <td>Very long</td>
                          <td>Designed for long-range battleship combat</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              ) : null}
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
