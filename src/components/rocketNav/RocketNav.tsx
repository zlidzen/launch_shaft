type RocketSection =
  | 'how-it-works'
  | 'comparison-table'
  | 'modules'
  | 'manufacture-how-it-works'
  | 'manufacture-recipes'
  | 'frigates'
  | 'destroyers'
  | 'cruisers'
  | 'battle-cruisers'

type RocketNavProps = {
  activeSection: RocketSection
  onSelectSection: (section: RocketSection) => void
}

const RocketNav = ({ activeSection, onSelectSection }: RocketNavProps) => {
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
          className={activeSection === 'frigates' ? 'rocket-nav-item rocket-nav-child active' : 'rocket-nav-item rocket-nav-child'}
          onClick={() => onSelectSection('frigates')}
        >
          Frigates
        </button>
        <button
          type="button"
          className={activeSection === 'destroyers' ? 'rocket-nav-item rocket-nav-child active' : 'rocket-nav-item rocket-nav-child'}
          onClick={() => onSelectSection('destroyers')}
        >
          Destroyers
        </button>
        <button
          type="button"
          className={activeSection === 'cruisers' ? 'rocket-nav-item rocket-nav-child active' : 'rocket-nav-item rocket-nav-child'}
          onClick={() => onSelectSection('cruisers')}
        >
          Cruisers
        </button>
        <button
          type="button"
          className={activeSection === 'battle-cruisers' ? 'rocket-nav-item rocket-nav-child active' : 'rocket-nav-item rocket-nav-child'}
          onClick={() => onSelectSection('battle-cruisers')}
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