import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="container footer-top">
                <div className="row flex justify-content-between">
                    <div className="col-lg-4 col-md-6 footer-about">
                        <Link to="/" className="logo d-flex align-items-center">
                            <span className="sitename">Best Ever Catering</span>
                        </Link>
                        <div className="footer-contact pt-3">
                            <p>Palakkad, Kerala</p>
                            <p className="mt-3"><strong>Phone:</strong> <span>+91 7510761910</span></p>
                            <p><strong>Email:</strong> <span>Bestevercatering@gmail.com</span></p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="#">Catering</a></li>
                            <li><a href="#">Event Management</a></li>
                            <li><a href="#">Birthday Party</a></li>
                            <li><a href="#">Wedding</a></li>
                            <li><a href="#">Corporate</a></li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="container copyright text-center mt-4">
                <p>© <span>Copyright</span> <strong className="px-1 sitename">Best Ever Catering</strong> <span>All Rights Reserved</span></p>
                <div className="credits">
                </div>
            </div>
        </footer>
    );
}
