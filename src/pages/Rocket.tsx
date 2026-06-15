import { useState } from 'react'
import RocketNav from '../components/rocketNav/RocketNav'

type RocketSection = 'how-it-works' | 'comparison-table'

type ComparisonRow = {
  type: string
  damage: number
  maxVelocity: number
  explosionRadius: number
  explosionVelocity: number
}

const comparisonRows: ComparisonRow[] = [
  { type: '*Rocket', damage: 117, maxVelocity: 2250, explosionRadius: 20, explosionVelocity: 150 },
  { type: '*Javelin Rocket', damage: 135, maxVelocity: 3000, explosionRadius: 16, explosionVelocity: 165 },
  { type: '*Rage Rocket', damage: 150, maxVelocity: 1875, explosionRadius: 24, explosionVelocity: 135 },
  { type: '*Caldary Rocket', damage: 140, maxVelocity: 2350, explosionRadius: 19, explosionVelocity: 155 },
  { type: '*Light Missile', damage: 90, maxVelocity: 6000, explosionRadius: 50, explosionVelocity: 80 },
  { type: '*Precision Light Missile', damage: 105, maxVelocity: 7000, explosionRadius: 35, explosionVelocity: 95 },
  { type: '*Fury Light Missile', damage: 120, maxVelocity: 5000, explosionRadius: 60, explosionVelocity: 70 },
  { type: '*Caldary Light Missile', damage: 112, maxVelocity: 6500, explosionRadius: 45, explosionVelocity: 85 },
  { type: '*Heavy Missile', damage: 150, maxVelocity: 4500, explosionRadius: 125, explosionVelocity: 80 },
  { type: '*Precision Heavy Missile', damage: 165, maxVelocity: 5250, explosionRadius: 90, explosionVelocity: 95 },
  { type: '*Fury Heavy Missile', damage: 180, maxVelocity: 3900, explosionRadius: 145, explosionVelocity: 70 },
  { type: '*Caldary Heavy Missile', damage: 172, maxVelocity: 4800, explosionRadius: 115, explosionVelocity: 85 },
  { type: '*Heavy Assault Missile', damage: 150, maxVelocity: 2750, explosionRadius: 60, explosionVelocity: 105 },
  { type: '*Javelin Heavy Assault Missile', damage: 135, maxVelocity: 3300, explosionRadius: 48, explosionVelocity: 120 },
  { type: '*Rage Heavy Assault Missile', damage: 180, maxVelocity: 2400, explosionRadius: 72, explosionVelocity: 90 },
  { type: '*Caldary Heavy Assault Missile', damage: 168, maxVelocity: 2950, explosionRadius: 55, explosionVelocity: 110 },
]

const Rocket = () => {
  const [activeRocketSection, setActiveRocketSection] = useState<RocketSection>('how-it-works')

  return (
    <section className="page page-rocket">
      <RocketNav activeRocketSection={activeRocketSection} onSelectSection={setActiveRocketSection} />
      <div className="rocket-main">
        {activeRocketSection === 'how-it-works' ? (
          <section className="rocket-panel">
            <h2>How it works</h2>
            <p>
              Based on{' '}
              <a href="https://wiki.eveuniversity.org/Missiles" target="_blank" rel="noopener noreferrer">
                wiki.eveuniversity
              </a>
            </p>
            <p>
              Missiles are guided weapons: they travel toward the target, then apply damage when they impact. Their
              damage is shaped by missile type, explosion radius, explosion velocity, target signature, and target
              speed.
            </p>
            <p>
              That makes missiles flexible across many ship classes, but different missiles shine in different
              situations. Smaller missiles are better at hitting smaller, faster targets, while larger missiles trade
              application for raw damage.
            </p>
            <p>
              Missiles have several characteristics: flight time, explosion radius, explosion velocity, and damage
              type. These characteristics determine how effective a missile is against a given target.
            </p>
            <h3>Damage type</h3>
            <p>
              Damage type is determined by the missile type, while the other characteristics are determined by the
              missile size. Damage type can be <strong><span className="damage-em">EM</span>,{' '}
                <span className="damage-thermal">Thermal</span>, <span className="damage-kinetic">Kinethic</span>, or{' '}
                <span className="damage-explosive">Explosive</span></strong>.
              It is important in 2 cases:
            </p>
            <ul>
              <li>
                First you need to choose damage type for enemy resists - example, enemy has low resist to{' '}
                <span className="damage-em">EM damage</span> - we load <span className="damage-em">Mjolnir</span>{' '}
                missiles (<span className="damage-em">EM damage</span>) to deal more damage.
              </li>
              <li>
                Second, your ship has bonus to special damage for example Corax has bonus to{' '}
                <span className="damage-kinetic">Kinethic damage</span> - we load{' '}
                <span className="damage-kinetic">Scourge</span> missiles ({' '}
                <span className="damage-kinetic">Kinethic damage</span>) to deal more damage.
              </li>
            </ul>
            <p>
              <span className="damage-thermal">Inferno &#x2192; Thermal</span>
            </p>
            <p>
              <span className="damage-em">Mjolnir &#x2192; EM</span>
            </p>
            <p>
              <span className="damage-explosive">Nova &#x2192; Explosive</span>
            </p>
            <p>
              <span className="damage-kinetic">Scourge &#x2192; Kinetic</span>
            </p>
            <h3>Flight time and Velocity</h3>
            <p>
              Combination of flight time and velocity determines how long it takes for a missile to reach its target.
              Also it impacts distance at which missile can hit the target - if target moves faster than missile. This
              is important because the longer a missile takes to reach its target, the more time the target has to move
              and potentially evade the missile. Faster missiles are better at hitting fast-moving targets, while slower
              missiles can be more effective against slower targets.
            </p>
            <h3>Explosion radius and velocity (application)</h3>
            <p>
              In general, missiles are a simpler weapon system to use than turrets. But while a missile can apply up to
              100% of the Base Damage to a ship in some situations, damage is often reduced by two factors:
            </p>
            <ul>
              <li>
                If the target ship is moving faster than the explosion velocity of the missile. Think of this as a fast
                ship being able to somewhat outrun the explosion.
              </li>
              <li>
                If the signature radius of the target ship is smaller than the missile&apos;s explosion radius. Think of
                this as a small ship flying through a large explosion and only being hit by a part of it.
              </li>
            </ul>
            <p>
              In other words, missile weapons are best at doing damage to larger, slower targets at longer range. This
              is not to say that a pilot cannot kill small, fast targets with the right missiles, or that there are no
              short range missile boats. Rather, the most common applications of launcher fitted ships tend to be as
              longer ranged, heavy damage weapons.
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
                    <th>Damage</th>
                    <th>Max.Velosity</th>
                    <th>Explosion Radius</th>
                    <th>Explosion Velosity</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.type}>
                      <td>{row.type}</td>
                      <td>{row.damage}</td>
                      <td>{row.maxVelocity}</td>
                      <td>{row.explosionRadius}</td>
                      <td>{row.explosionVelocity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : null}
      </div>
    </section>
  )
}

export default Rocket