import './Header.css';

const NavigationLinks = [
  'Home',
  'About Us',
  'Ride Type',
  'Pricing',
  'Process',
  'Trust & Safety'
];

export default function Header() {
  return (
    <header className="header">
      <div className="container flex-between header-container">
        {/* Logo */}
        <div className="logo-container">
          <a href="#" className="logo">
            <img
              src="/images/vdrive_logo_header.png"
              alt="VDrive Logo"
              className="logo-img"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list flex gap-8">
            {NavigationLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="nav-link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="desktop-actions flex gap-4">
          <button className="btn btn-join-driver font-bold">Join as Driver</button>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </header>
  );
}
