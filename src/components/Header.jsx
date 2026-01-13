import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    return (
        <header id="header" className="header fixed-top">
            <div className="topbar d-flex align-items-center">
                <div className="container d-flex justify-content-end justify-content-md-end">
                    <div className="contact-info d-flex align-items-center">
                        <a href="mailto:Bestevercatering@gmail.com" className="d-flex align-items-center">
                            <i className="bi bi-envelope pe-2"></i>
                            <span className="d-none d-md-inline ms-2">Bestevercatering@gmail.com</span>
                        </a>
                        <a href="tel:+917510761910" className="d-flex align-items-center ms-4">
                            <i className="bi bi-phone pe-2"></i>
                            <span className="d-none d-md-inline ms-2">7510761910</span>
                        </a>
                        <a href="https://www.instagram.com/bestevercateringservice?igsh=MmR4MWtnZ20xbXc="
                            target="_blank" rel="noopener noreferrer"
                            className="d-flex align-items-center ms-4">
                            <i className="bi bi-instagram pe-2"></i>
                            <span className="d-none d-md-inline ms-2">Instagram</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="branding d-flex align-items-center">
                <div className="container position-relative d-flex align-items-center justify-content-between">
                    <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
                        <img src="/assets/img/logo-be.jpg" alt="Best Ever Catering Logo" className="me-2" style={{ borderRadius: '5px' }} />
                        <h1 className="sitename">Best Ever Catering</h1>
                    </Link>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home<br /></Link></li>
                            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
                            <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li>
                            <li><Link to="/events" className={location.pathname === '/events' ? 'active' : ''}>Events</Link></li>
                            <li><Link to="/partners" className={location.pathname === '/partners' ? 'active' : ''}>Partners</Link></li>
                            <li><Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link></li>
                            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>

                    <a href="https://wa.me/917510761910" className="btn-book-a-table d-none d-xl-block" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-whatsapp me-2"></i> Book Now
                    </a>
                </div>
            </div>
        </header>
    );
}
