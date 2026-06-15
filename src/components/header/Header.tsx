import { NavLink } from 'react-router-dom'

const Header = () => (
  <header className="header">
    <div className="container header-inner">
      <h1 className="logo">Launch Shaft</h1>
      <nav className="nav" aria-label="Primary">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Home
        </NavLink>
        <NavLink to="/rocket" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Let&apos;s rocket it
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          About
        </NavLink>
      </nav>
    </div>
  </header>
)

export default Header