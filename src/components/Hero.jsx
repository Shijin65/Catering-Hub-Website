export default function Hero() {
    return (
        <section id="hero" className="hero section dark-background">
            <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 d-flex flex-column align-items-center align-items-lg-start">
                        <h2 data-aos="fade-up" data-aos-delay="100">Welcome to <span>Best Ever Catering</span></h2>
                        <p data-aos="fade-up" data-aos-delay="200">Smiles, Satisfaction & Sweet Memories</p>
                        <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
                            <a href="#specials" className="cta-btn">Our Specials</a>
                            <a href="https://wa.me/917510761910" className="cta-btn" target="_blank" rel="noopener noreferrer">Book an Event</a>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center justify-content-center mt-5 mt-lg-0">
                        <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn"></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
