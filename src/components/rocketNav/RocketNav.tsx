import { useState } from 'react'

type RocketSection = 'how-it-works' | 'comparison-table'

type ShipSection = 'frigates' | 'destroyers' | 'cruisers'

type RocketNavProps = {
  activeRocketSection: RocketSection
  onSelectSection: (section: RocketSection) => void
}

const RocketNav = ({ activeRocketSection, onSelectSection }: RocketNavProps) => {
  const [activeShipSection, setActiveShipSection] = useState<ShipSection>('frigates')

  return (
    <aside className="rocket-nav" aria-label="Rocket categories">
      <p className="rocket-nav-label">Missiles</p>
      <div className="rocket-subnav" aria-label="Missile subsections">
        <button
          type="button"
          className={activeRocketSection === 'how-it-works' ? 'rocket-nav-item rocket-nav-child active' : 'rocket-nav-item rocket-nav-child'}
          onClick={() => onSelectSection('how-it-works')}
        >
          How it works
        </button>
        <button
          type="button"
          className={activeRocketSection === 'comparison-table' ? 'rocket-nav-item rocket-nav-child active' : 'rocket-nav-item rocket-nav-child'}
          onClick={() => onSelectSection('comparison-table')}
        >
          Comparison table
        </button>
      </div>

      <p className="rocket-nav-label">Ships</p>
      <div className="rocket-subnav" aria-label="Ship subsections">
        <button
          type="button"
          className={activeShipSection === 'frigates' ? 'rocket-nav-item rocket-nav-child active' : 'rocket-nav-item rocket-nav-child'}
          onClick={() => setActiveShipSection('frigates')}
        >
          Frigates
        </button>
        <button
          type="button"
          className={activeShipSection === 'destroyers' ? 'rocket-nav-item rocket-nav-child active' : 'rocket-nav-item rocket-nav-child'}
          onClick={() => setActiveShipSection('destroyers')}
        >
          Destroyers
        </button>
        <button
          type="button"
          className={activeShipSection === 'cruisers' ? 'rocket-nav-item rocket-nav-child active' : 'rocket-nav-item rocket-nav-child'}
          onClick={() => setActiveShipSection('cruisers')}
        >
          Cruisers
        </button>
      </div>

      <button type="button" className="rocket-nav-item">Modules</button>
      <button type="button" className="rocket-nav-item">PvE</button>
      <button type="button" className="rocket-nav-item">PvP</button>
      <button type="button" className="rocket-nav-item">Manufacture</button>
    </aside>
  )
}

export default RocketNav