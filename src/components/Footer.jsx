export default function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="container footer-top">
                <div className="row flex justify-content-between">
                    <div className="col-lg-4 col-md-6 footer-about">
                        <a href="index.html" className="logo d-flex align-items-center">
                            <span className="sitename">Best Ever Catering</span>
                        </a>
                        <div className="footer-contact pt-3">
                            <p>Palakkad, Kerala</p>
                            <p className="mt-3"><strong>Phone:</strong> <span>+91 7510761910</span></p>
                            <p><strong>Email:</strong> <span>Bestevercatering@gmail.com</span></p>
                        </div>
                        <div className="social-links d-flex mt-4">
                            <a href=""><i className="bi bi-twitter-x"></i></a>
                            <a href=""><i className="bi bi-facebook"></i></a>
                            <a href=""><i className="bi bi-instagram"></i></a>
                            <a href=""><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">Contact</a></li>
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

                    {/* <div className="col-lg-4 col-md-12 footer-newsletter">
                        <h4>Our Newsletter</h4>
                        <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                        <form action="#" method="post" className="php-email-form">
                            <div className="newsletter-form"><input type="email" name="email" /><input type="submit" value="Subscribe" /></div>
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your subscription request has been sent. Thank you!</div>
                        </form>
                    </div> */}
                </div>
            </div>

            <div className="container copyright text-center mt-4">
                <p>© <span>Copyright</span> <strong className="px-1 sitename">Best Ever Catering</strong> <span>All Rights Reserved</span></p>
                <div className="credits">
                    {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a> */}
                </div>
            </div>
        </footer>
    );
}
