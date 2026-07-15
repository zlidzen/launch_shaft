import type { ShipSectionType } from '../rocketSection/rocketSectionTypes'

type RocketSection =
  | 'how-it-works'
  | 'comparison-table'
  | 'modules'
  | 'manufacture-how-it-works'
  | 'manufacture-recipes'
  | 'ships'

type RocketNavProps = {
  activeSection: RocketSection
  activeShipSection: ShipSectionType
  onSelectSection: (section: RocketSection, shipSection?: ShipSectionType) => void
}

const RocketNav = ({ activeSection, activeShipSection, onSelectSection }: RocketNavProps) => {
  return (
    <aside className="rocket-nav" aria-label="Rocket categories">
      <p className="rocket-nav-label">Missiles</p>
      <div className="rocket-subnav" aria-label="Missile subsections">
        <button
          type="button"
          className={activeSection === 'how-it-works' ? 'rocket-nav-item rocket-nav-child active' : 'rocket-nav-item rocket-nav-child'}
          onClick={() => onSelectSection('how-it-works')}
        >
          How it works
        </button>
        <button
          type="button"
          className={activeSection === 'comparison-table' ? 'rocket-nav-item rocket-nav-child active' : 'rocket-nav-item rocket-nav-child'}
          onClick={() => onSelectSection('comparison-table')}
        >
          Comparison table
        </button>
      </div>

      <p className="rocket-nav-label">Ships</p>
      <div className="rocket-subnav" aria-label="Ship subsections">
        <button
          type="button"
          className={activeSection === 'ships' && activeShipSection === 'frigates' ? 'rocket-nav-item rocket-nav-child active' : 'rocket-nav-item rocket-nav-child'}
          onClick={() => onSelectSection('ships', 'frigates')}
        >
          Frigates
        </button>
        <button
          type="button"
          className={activeSection === 'ships' && activeShipSection === 'destroyers' ? 'rocket-nav-item rocket-nav-child active' : 'rocket-nav-item rocket-nav-child'}
          onClick={() => onSelectSection('ships', 'destroyers')}
        >
          Destroyers
        </button>
        <button
          type="button"
          className={activeSection === 'ships' && activeShipSection === 'cruisers' ? 'rocket-nav-item rocket-nav-child active' : 'rocket-nav-item rocket-nav-child'}
          onClick={() => onSelectSection('ships', 'cruisers')}
        >
          Cruisers
        </button>
        <button
          type="button"
          className={activeSection === 'ships' && activeShipSection === 'battlecruisers' ? 'rocket-nav-item rocket-nav-child active' : 'rocket-nav-item rocket-nav-child'}
          onClick={() => onSelectSection('ships', 'battlecruisers')}
        >
          Battle Cruisers
        </button>
      </div>

      <button
        type="button"
        className={activeSection === 'modules' ? 'rocket-nav-item active' : 'rocket-nav-item'}
        onClick={() => onSelectSection('modules')}
      >
        Modules
      </button>
      <button type="button" className="rocket-nav-item">PvE</button>
      <button type="button" className="rocket-nav-item">PvP</button>

      <p className="rocket-nav-label">Manufacture</p>
      <div className="rocket-subnav" aria-label="Manufacture subsections">
        <button
          type="button"
          className={
            activeSection === 'manufacture-how-it-works'
              ? 'rocket-nav-item rocket-nav-child active'
              : 'rocket-nav-item rocket-nav-child'
          }
          onClick={() => onSelectSection('manufacture-how-it-works')}
        >
          How it works
        </button>
        <button
          type="button"
          className={
            activeSection === 'manufacture-recipes'
              ? 'rocket-nav-item rocket-nav-child active'
              : 'rocket-nav-item rocket-nav-child'
          }
          onClick={() => onSelectSection('manufacture-recipes')}
        >
          Recipes
        </button>
      </div>
    </aside>
  )
}

export default RocketNav