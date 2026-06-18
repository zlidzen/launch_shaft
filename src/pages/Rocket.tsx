import { useState } from 'react'
import RocketNav from '../components/rocketNav/RocketNav'
import blueprintsData from '../../data/blueprints.ts'

type RocketSection =
  | 'how-it-works'
  | 'comparison-table'
  | 'manufacture-how-it-works'
  | 'manufacture-recipes'
  | 'frigates'
  | 'destroyers'
  | 'cruisers'
  | 'battle-cruisers'

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

type ShipEntry = {
  id: number
  name: string
  role: string
}

const shipLists: Record<'frigates' | 'destroyers' | 'cruisers' | 'battle-cruisers', ShipEntry[]> = {
  frigates: [
    { id: 602, name: 'Kestrel', role: 'Classic Caldari missile frigate' },
    { id: 598, name: 'Breacher', role: 'Brawling rocket frigate' },
    { id: 583, name: 'Condor', role: 'Fast tackle missile frigate' },
    { id: 17619, name: 'Caldari Navy Hookbill', role: 'Navy frigate with strong missile pressure' },
    { id: 17930, name: 'Worm', role: 'Pirate frigate with strong drone and missile support' },
    { id: 33816, name: 'Garmur', role: 'Long-range missile kiting frigate' },
  ],
  destroyers: [
    { id: 32876, name: 'Corax', role: 'Caldari missile destroyer' },
    { id: 32878, name: 'Talwar', role: 'Minmatar missile destroyer' },
    { id: 34828, name: 'Jackdaw', role: 'Tactical destroyer with missile options' },
    { id: 22452, name: 'Heretic', role: 'Interdictor that can fit missile launchers' },
    { id: 42685, name: 'Sunesis', role: 'Flexible pirate destroyer hull' },
  ],
  cruisers: [
    { id: 621, name: 'Caracal', role: 'Standard missile cruiser' },
    { id: 17634, name: 'Caracal Navy Issue', role: 'Upgraded missile cruiser' },
    { id: 29340, name: 'Osprey Navy Issue', role: 'Missile cruiser with strong range' },
    { id: 11993, name: 'Cerberus', role: 'Heavy missile HAC' },
    { id: 12019, name: 'Sacrilege', role: 'Heavy assault missile HAC' },
    { id: 17715, name: 'Gila', role: 'Drone and missile cruiser with strong application' },
  ],
  'battle-cruisers': [
    { id: 24698, name: 'Drake', role: 'Armored missile battlecruiser' },
    { id: 24702, name: 'Hurricane', role: 'Versatile missile battlecruiser' },
    { id: 24696, name: 'Harbinger', role: 'Long-range missile battlecruiser' },
    { id: 22446, name: 'Vulture', role: 'Fast missile battlecruiser' },
    { id: 624, name: 'Maller', role: 'Shield-tanked hybrid cruiser with missile fits' },
    { id: 17843, name: 'Vexor Navy Issue', role: 'Drone and missile support battlecruiser' },
  ],
}

const shipSectionTitles: Record<'frigates' | 'destroyers' | 'cruisers' | 'battle-cruisers', string> = {
  frigates: 'Frigates',
  destroyers: 'Destroyers',
  cruisers: 'Cruisers',
  'battle-cruisers': 'Battle Cruisers',
}

const Rocket = () => {
  const [activeSection, setActiveSection] = useState<RocketSection>('how-it-works')
  const activeShipSection =
    activeSection === 'frigates' || activeSection === 'destroyers' || activeSection === 'cruisers' || activeSection === 'battle-cruisers'
      ? activeSection
      : null

  return (
    <section className="page page-rocket">
      <RocketNav activeSection={activeSection} onSelectSection={setActiveSection} />
      <div className="rocket-main">
        {activeSection === 'how-it-works' ? (
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

        {activeSection === 'comparison-table' ? (
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

        {activeSection === 'manufacture-how-it-works' ? (
          <section className="rocket-panel">
            <h2>How it works</h2>
             <p>
              Based on{' '}
              <a href="https://wiki.eveuniversity.org/Industry" target="_blank" rel="noopener noreferrer">
                wiki.eveuniversity
              </a>
            </p>

            <p>
              Manufacturing in EVE is a multi-step process: research or copy a blueprint, acquire the required materials,
              and run the job in a structure or station with the needed skills. The result is a finished module, ammo,
              or component ready for fitting.
            </p>
            <p>
              The process is similar to missiles: you need the right blueprint, the right inputs, and the right production
              environment. Production time and material efficiency are affected by your skills, rigs, and the structure where
              you build.
            </p>
            <h3>Blueprints</h3>
            <p>
              Blueprints define the item output, required materials, and manufacturing time. A blueprint copy costs less
              than a faction or original blueprint, but it has a limited number of runs. Original blueprints have infinite
              runs and can be researched for better efficiency.
            </p>
            <h3>Material efficiency</h3>
            <p>
              Material Efficiency (ME) reduces the number of components required. Higher ME saves minerals and materials,
              making manufacture faster and cheaper. Fit the right skills and rigs to maximize efficiency for items you make
              often.
            </p>
            <h3>Production efficiency</h3>
            <p>
              Production Efficiency (PE) reduces manufacturing time. Faster jobs free up industry slots and let you produce
              more items per day. PE is especially valuable for large item runs or high-value products.
            </p>
          </section>
        ) : null}

        {activeSection === 'manufacture-recipes' ? (
          <section className="rocket-panel">
            <h2>Recipes</h2>
            <p>Blueprint collection for missile-related ships and components.</p>
            <div className="blueprint-grid">
              {blueprintsData.map((blueprint: { id: number; name: string }) => (
                <article className="blueprint-card" key={blueprint.name}>
                  <img
                    className="blueprint-card-image"
                    src={`https://images.evetech.net/types/${blueprint.id}/bp`}
                    alt={`${blueprint.name} icon`}
                  />
                  <h3>{blueprint.name}</h3>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {activeShipSection ? (
          <section className="rocket-panel">
            <h2>{shipSectionTitles[activeShipSection]}</h2>
            <p>
              Examples of EVE Online ships in this class that can be fitted with rocket or missile launchers.
            </p>
            <div className="ship-grid">
              {shipLists[activeShipSection].map((ship) => (
                <article className="ship-card" key={ship.name}>
                  {ship.id ? (
                    <img
                      className="ship-card-image"
                      src={`https://images.evetech.net/types/${ship.id}/icon?size=128`}
                      alt={`${ship.name} icon`}
                    />
                  ) : null}
                  <h3>{ship.name}</h3>
                  <p>{ship.role}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </section>
  )
}

export default Rocket