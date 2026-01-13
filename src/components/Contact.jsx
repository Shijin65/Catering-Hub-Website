export default function Contact() {
    return (
        <section id="contact" className="contact section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Contact</h2>
                <p>Get In Touch With Us</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                {/* Redesigned Location Section */}
                <div className="row gy-4 mb-5 justify-content-center">
                    <div className="col-lg-6">
                        <div className="contact-location-box" data-aos="fade-up" data-aos-delay="200">
                            <i className="bi bi-geo-alt"></i>
                            <h3>Our Location</h3>
                            <p>Palakkad, Kerala</p>
                        </div>
                    </div>
                </div>

                {/* Contact Methods Section */}
                <div className="row gy-4 justify-content-center">
                    <div className="col-3 col-lg-2">
                        <a href="https://wa.me/917510761910" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <div className="contact-card" data-aos="fade-up" data-aos-delay="100">
                                <i className="bi bi-whatsapp"></i>
                                <h3>WhatsApp</h3>
                                <p>Chat with us</p>
                            </div>
                        </a>
                    </div>

                    <div className="col-3 col-lg-2">
                        <a href="https://ig.me/m/bestevercateringservice" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <div className="contact-card" data-aos="fade-up" data-aos-delay="200">
                                <i className="bi bi-instagram"></i>
                                <h3>Instagram</h3>
                                <p>Message us</p>
                            </div>
                        </a>
                    </div>

                    <div className="col-3 col-lg-2">
                        <a href="tel:+917510761910" className="contact-link">
                            <div className="contact-card" data-aos="fade-up" data-aos-delay="300">
                                <i className="bi bi-telephone"></i>
                                <h3>Call Us</h3>
                                <p>7510761910</p>
                            </div>
                        </a>
                    </div>

                    <div className="col-3 col-lg-2">
                        <a href="mailto:Bestevercatering@gmail.com" className="contact-link">
                            <div className="contact-card" data-aos="fade-up" data-aos-delay="400">
                                <i className="bi bi-envelope"></i>
                                <h3>Email Us</h3>
                                <p>Send a message</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
