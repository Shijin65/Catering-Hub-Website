export default function Team() {
    return (
        <section id="team" className="team section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Our Team</h2>
                <p>Expert Professionals Ready to Serve You</p>
            </div>

            <div className="container">
                <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-5 justify-content-center">
                    <div className="col" data-aos="fade-up" data-aos-delay="100">
                        <div className="member">
                            <img src="/assets/img/testimonials/testimonials-1.jpg" className="img-fluid" alt="Manager 1" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Arjun Nair</h4>
                                    <span>General Manager</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col" data-aos="fade-up" data-aos-delay="200">
                        <div className="member">
                            <img src="/assets/img/testimonials/testimonials-5.jpg" className="img-fluid" alt="Manager 2" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Priya Menon</h4>
                                    <span>Operations Manager</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col" data-aos="fade-up" data-aos-delay="300">
                        <div className="member">
                            <img src="/assets/img/testimonials/testimonials-3.jpg" className="img-fluid" alt="Manager 3" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Rahul Sharma</h4>
                                    <span>Head Chef & Kitchen Manager</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col" data-aos="fade-up" data-aos-delay="100">
                        <div className="member">
                            <img src="/assets/img/testimonials/testimonials-4.jpg" className="img-fluid" alt="Manager 4" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Anjali Krishna</h4>
                                    <span>Event Coordinator</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col" data-aos="fade-up" data-aos-delay="200">
                        <div className="member">
                            <img src="/assets/img/testimonials/testimonials-5.jpg" className="img-fluid" alt="Manager 5" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Vikram Singh</h4>
                                    <span>Client Relations Manager</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
