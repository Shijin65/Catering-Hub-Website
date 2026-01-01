export default function Chefs() {
    return (
        <section id="chefs" className="chefs section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Our Team</h2>
                <p>Expert Professionals Ready to Serve You</p>
            </div>

            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="member">
                            <img src="/assets/img/gallery/team-group-2.jpg" className="img-fluid" alt="Best Ever Catering Staff" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Our Professional Crew</h4>
                                    <span>Skilled Staff</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="member">
                            <img src="/assets/img/gallery/team-group-3.jpg" className="img-fluid" alt="Best Ever Catering Staff" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Event Supervisors</h4>
                                    <span>Leadership Team</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="member">
                            <img src="/assets/img/gallery/team-group-4.jpg" className="img-fluid" alt="Best Ever Catering Staff" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Hospitality Team</h4>
                                    <span>Guest Services</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
