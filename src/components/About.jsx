export default function About() {
    return (
        <section id="about" className="about section">
            <div className="container section-title" data-aos="fade-up">
                <h2>About Us</h2>
                <p>Best Catering Management Company In Kerala</p>
            </div>
            <div className="container" data-aos="fade-up">
                <div className="row gy-5 align-items-center justify-content-center">
                    {/* Logo in a small frame */}
                    <div className="col-lg-4 order-1 order-lg-1 text-center">
                        <div className="about-logo-frame">
                            <img src="/assets/img/logo-be.jpg" className="img-fluid" alt="Best Ever Catering Logo" />
                        </div>
                    </div>

                    {/* Content matching the image */}
                    <div className="col-lg-7 order-2 order-lg-2 content text-center text-lg-start">

                        <p className="about-italic">
                            Best catering management company in kerala!
                        </p>

                        <p className="about-text">
                            Best Ever Catering is a leading and trusted management company for catering in Kerala,
                            committed to excellence in the catering service industry. We are known for
                            catering the full spectrum of events from food based parties and customized settings and
                            arrangements for memorable dining for wedding receptions, corporate gatherings with a touch of class
                            and all occasions with the blessing of food.
                        </p>

                        <p className="about-text">
                            We strive to make your day majestic and memorable. Our highly professional event team can
                            provide every aspect of your food party including hospitality management, dining arrangement,
                            service staff, security team, passionate presentation for food items with a variety of food counters,
                            and service items.
                        </p>

                        <div className="mt-4">
                            <a href="#contact" className="btn-book-a-table">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
