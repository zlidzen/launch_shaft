type RocketSection = 'how-it-works' | 'comparison-table'

type RocketNavProps = {
  activeRocketSection: RocketSection
  onSelectSection: (section: RocketSection) => void
}

const RocketNav = ({ activeRocketSection, onSelectSection }: RocketNavProps) => (
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
    <button type="button" className="rocket-nav-item">Ships</button>
    <button type="button" className="rocket-nav-item">Modules</button>
    <button type="button" className="rocket-nav-item">PvE</button>
    <button type="button" className="rocket-nav-item">PvP</button>
    <button type="button" className="rocket-nav-item">Manufacture</button>
  </aside>
)

export default RocketNav