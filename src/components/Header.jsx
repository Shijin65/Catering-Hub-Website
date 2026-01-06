export default function Header() {
    return (
        <header id="header" className="header fixed-top">
            <div className="topbar d-flex align-items-center">
                <div className="container d-flex justify-content-center justify-content-md-end">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:Bestevercatering@gmail.com">Bestevercatering@gmail.com</a></i>
                        <i className="bi bi-phone d-flex align-items-center ms-4"><span>+91 7510761910</span></i>
                        <i className="bi bi-instagram d-flex align-items-center ms-4"><a href="https://www.instagram.com/bestevercateringservice?igsh=MmR4MWtnZ20xbXc=" target="_blank" rel="noopener noreferrer" style={{ paddingLeft: '5px' }}>Instagram</a></i>
                    </div>
                </div>
            </div>

            <div className="branding d-flex align-items-center">
                <div className="container position-relative d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
                        <img src="/assets/img/logo-be.jpg" alt="Best Ever Catering Logo" className="me-2" style={{ maxHeight: '40px', borderRadius: '5px' }} />
                        <h1 className="sitename">Best Ever Catering</h1>
                    </a>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><a href="#hero" className="active">Home<br /></a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#specials">Services</a></li>
                            <li><a href="#events">Events</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#contact">Contact</a></li>
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
