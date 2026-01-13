import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="container footer-top">
                <div className="row gy-4 justify-content-between">
                    <div className="col-lg-5 col-md-12 footer-about">
                        <Link to="/" className="logo d-flex align-items-center mb-3">
                            <img src="/assets/img/logo-be.jpg" alt="Best Ever Catering Logo" className="me-2" style={{ maxHeight: '50px', borderRadius: '8px' }} />
                            <span className="sitename">Best Ever Catering</span>
                        </Link>
                        <p className="mt-3 mb-4">
                            Bringing excellence to every plate since day one. We specialize in providing
                            premium event manpower and catering solutions in Palakkad, Kerala.
                            Your celebration, our commitment to perfection.
                        </p>
                        <div className="social-links d-flex">
                            <a href="https://wa.me/917510761910" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                                <i className="bi bi-whatsapp"></i>
                            </a>
                            <a href="https://www.instagram.com/bestevercateringservice?igsh=MmR4MWtnZ20xbXc=" target="_blank" rel="noopener noreferrer" title="Instagram">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/events">Events</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-6 footer-contact">
                        <h4>Get In Touch</h4>
                        <p>Palakkad, Kerala</p>
                        <p className="mt-4"><strong>Phone:</strong><br />+91 7510761910</p>
                        <p className="mt-2"><strong>Email:</strong><br />Bestevercatering@gmail.com</p>
                    </div>

                </div>
            </div>

            <div className="container copyright text-center">
                <p>© <span>Copyright</span> <strong className="px-1 sitename">Best Ever Catering</strong> <span>All Rights Reserved</span></p>
                <div className="credits">
                    Designed by <a href="https://shijinportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="designer-name">Shijin</a>
                    <a href="https://ig.me/m/shi__jinn_" target="_blank" rel="noopener noreferrer" className="designer-social" title="Contact Developer">
                        <i className="bi bi-instagram ms-2"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
