import { Link } from 'react-router-dom'
import { shipLists, shipSectionSpeedAndSignature, shipSectionTitles, type ShipEntry } from '../../data/shipLists'
import type { ShipSectionType } from './rocketSectionTypes'

type ActiveShipSectionProps = {
  activeShipSection: ShipSectionType
  onSelectShipSection?: (section: ShipSectionType) => void
}

const shipSectionOptions: Array<{ value: ShipSectionType; label: string }> = [
  { value: 'frigates', label: 'Frigates' },
  { value: 'destroyers', label: 'Destroyers' },
  { value: 'cruisers', label: 'Cruisers' },
  { value: 'battlecruisers', label: 'Battle Cruisers' },
]

const ActiveShipSection = ({ activeShipSection, onSelectShipSection }: ActiveShipSectionProps) => {
  return (
    <section className="rocket-panel">
      <div className="rocket-subnav" aria-label="Ship class filters">
        {shipSectionOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            className={activeShipSection === option.value ? 'rocket-nav-item rocket-nav-child active' : 'rocket-nav-item rocket-nav-child'}
            onClick={() => onSelectShipSection?.(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
      <h2>{shipSectionTitles[activeShipSection]}</h2>
      <p>Examples of EVE Online ships in this class that can be fitted with rocket or missile launchers.</p>
      <p>* Base parameters: {shipSectionSpeedAndSignature[activeShipSection]}</p>
      <div className="ship-grid">
        {shipLists[activeShipSection].map((ship: ShipEntry) => (
          <Link to={`/ship/${encodeURIComponent(ship.name)}`} key={ship.name} className="ship-card-link">
            <article className="ship-card">
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
          </Link>
        ))}
      </div>
    </section>
  )
}

export default ActiveShipSection
