type HeaderProps = {
  activePage: 'home' | 'rocket' | 'about'
  onNavigate: (page: 'home' | 'rocket' | 'about') => void
}

const Header = ({ activePage, onNavigate }: HeaderProps) => (
  <header className="header">
    <div className="container header-inner">
      <h1 className="logo">Launch Shaft</h1>
      <nav className="nav" aria-label="Primary">
        <button
          type="button"
          className={activePage === 'home' ? 'nav-button active' : 'nav-button'}
          onClick={() => onNavigate('home')}
        >
          Home
        </button>
        <button
          type="button"
          className={activePage === 'rocket' ? 'nav-button active' : 'nav-button'}
          onClick={() => onNavigate('rocket')}
        >
          Let&apos;s rocket it
        </button>
        <button
          type="button"
          className={activePage === 'about' ? 'nav-button active' : 'nav-button'}
          onClick={() => onNavigate('about')}
        >
          About
        </button>
      </nav>
    </div>
  </header>
)

export default Header