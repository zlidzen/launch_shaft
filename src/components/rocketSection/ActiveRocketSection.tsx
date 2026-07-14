import { blueprintData } from '../../data/blueprints'
import { moduleLists, moduleSectionTitles } from '../../data/moduleLists'
import ActiveShipSection from './ActiveShipSection'
import type { RocketSection, ShipSectionType } from './rocketSectionTypes'

type ActiveRocketSectionProps = {
  activeSection: RocketSection
  activeShipSection: ShipSectionType
  onSelectShipSection: (section: ShipSectionType) => void
}

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

const MATERIAL_NAMES: Record<number, string> = {
  34: 'Tritanium',
  35: 'Pyerite',
  36: 'Mexallon',
  37: 'Isogen',
  38: 'Nocxium',
  39: 'Zydrine',
  40: 'Megacyte',
}

const ActiveRocketSection = ({ activeSection, activeShipSection, onSelectShipSection }: ActiveRocketSectionProps) => {
  if (activeSection === 'ships') {
    return (
      <ActiveShipSection
        activeShipSection={activeShipSection}
        onSelectShipSection={onSelectShipSection}
      />
    )
  }

  return (
    <div className="rocket-main">
      {activeSection === 'how-it-works' ? (
        <section className="rocket-panel">
          <h2>How it works</h2>
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
        </section>
      ) : null}

      {activeSection === 'comparison-table' ? (
        <section className="rocket-panel">
          <h2>Comparison table</h2>
          <p>* - all types of damage.</p>
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

      {activeSection === 'modules' ? (
        <section className="rocket-panel">
          <h2>Modules</h2>
          <p>Recommended modules for rockets and missiles.</p>
          <div className="module-list">
            {(['high_slot', 'mid_slot', 'low_slot', 'rig_slot', 'implant_slot', 'buster_slot'] as Array<keyof typeof moduleLists>).map((sectionKey) => {
              const modules = moduleLists[sectionKey]

              return (
                <article className="module-group" key={sectionKey}>
                  <h3>{moduleSectionTitles[sectionKey]}</h3>
                  {modules.length === 0 ? (
                    <p>Items that upgrade rocket or missile characteristics.</p>
                  ) : (
                    <ul>
                      {modules.map((item) => (
                        <li key={item.id} className="material-item">
                          {item.id ? (
                            <img src={`https://images.evetech.net/types/${item.id}/icon?size=32`} alt={`${item.name} icon`} />
                          ) : null}{' '}
                          {item.name}
                          {item.ammo && item.ammo !== 'none' ? ` — ${item.ammo}` : ''}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              )
            })}
          </div>
        </section>
      ) : null}

      {activeSection === 'manufacture-how-it-works' ? (
        <section className="rocket-panel">
          <h2>Manufacture basics</h2>
          <p>Manufacturing in EVE is a multi-step process: research or copy a blueprint, acquire the required materials, and run the job in a structure or station with the needed skills.</p>
        </section>
      ) : null}

      {activeSection === 'manufacture-recipes' ? (
        <section className="rocket-panel">
          <h2>Recipes</h2>
          <p>Blueprint collection for missile-related ships and components.</p>
          <div className="blueprint-grid">
            {blueprintData.map((blueprint: { id: number; name: string; materials: { typeID: number; quantity: number }[] }) => {
              const materials = blueprint.materials ?? []

              return (
                <article className="blueprint-card" key={blueprint.name}>
                  <h3 className="blueprint-title">{blueprint.name}</h3>
                  <div className="blueprint-card-body">
                    <div className="image-column">
                      <img className="blueprint-card-image" src={`https://images.evetech.net/types/${blueprint.id}/bp`} alt={`${blueprint.name} icon`} />
                    </div>
                    <div className="materials-column">
                      <ul className="materials-list">
                        {materials.length === 0 ? (
                          <li className="materials-empty">No manufacturing materials listed</li>
                        ) : (
                          materials.map((material) => (
                            <li key={material.typeID} className="material-item">
                              <img src={`https://images.evetech.net/types/${material.typeID}/icon?size=32`} alt={`${MATERIAL_NAMES[material.typeID] ?? material.typeID} icon`} className="material-icon" />
                              <span className="material-name">{MATERIAL_NAMES[material.typeID] ?? `ID ${material.typeID}`}</span>{' '}
                              <span className="material-qty">{material.quantity}</span>
                            </li>
                          ))
                        )}
                      </ul>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      ) : null}
    </div>
  )
}

export default ActiveRocketSection
