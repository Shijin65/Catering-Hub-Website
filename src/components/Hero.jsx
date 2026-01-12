import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = '/assets/img/gallery/team-group-5.jpg';
        img.onload = () => setImageLoaded(true);
    }, []);

    return (
        <section id="hero" className="hero section dark-background">
            <img
                src="/assets/img/gallery/team-group-5.jpg"
                alt="Best Ever Catering Team"
                data-aos="fade-in"
                style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in' }}
                loading="eager"
            />
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-10">
                        <h2 data-aos="fade-up" data-aos-delay="100">Excellence in <span>Catering & Event</span> Management</h2>
                        <p data-aos="fade-up" data-aos-delay="200">Palakkad's Premier Choice for Professional Staffing & Memorable Culinary Experiences</p>
                        <div className="d-flex justify-content-center mt-5" data-aos="fade-up" data-aos-delay="300">
                            <Link to="/services" className="cta-btn">Our Services</Link>
                            <a href="https://wa.me/917510761910" className="cta-btn" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-whatsapp me-2"></i> Book Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
