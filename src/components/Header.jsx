import './Header.css';
import udemyLogo from '../icons/udemy-logo.png';

// Icon Components
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

const ShoppingCartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        {/* Logo */}
        <div className="logo">
          <img src={udemyLogo} alt="Udemy" />
        </div>

        {/* Explore */}
        <nav className="nav-explore">
          <button className="nav-link">Explore</button>
        </nav>

        {/* Search Bar */}
        <div className="search-container">
          <SearchIcon />
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search for anything"
          />
        </div>

        {/* Right Side Navigation */}
        <nav className="nav-right">
          <a href="#" className="nav-link">Plans & Pricing</a>
          <a href="#" className="nav-link">Udemy Business</a>
          <a href="#" className="nav-link">Teach on Udemy</a>
          
          <button className="cart-button">
            <ShoppingCartIcon />
          </button>

          <button className="login-button">Log in</button>
          <button className="signup-button">Sign up</button>
          
          <button className="language-button">
            <GlobeIcon />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
