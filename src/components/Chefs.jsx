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
                            <img src="assets/img/chefs/chefs-1.jpg" className="img-fluid" alt="" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Rajesh Kumar</h4>
                                    <span>Master Chef</span>
                                </div>
                                <div className="social">
                                    <a href=""><i className="bi bi-twitter-x"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="member">
                            <img src="assets/img/chefs/chefs-2.jpg" className="img-fluid" alt="" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Anjana Menon</h4>
                                    <span>Event Supervisor</span>
                                </div>
                                <div className="social">
                                    <a href=""><i className="bi bi-twitter-x"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="member">
                            <img src="assets/img/chefs/chefs-3.jpg" className="img-fluid" alt="" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Mohammed Ali</h4>
                                    <span>Hospitality Manager</span>
                                </div>
                                <div className="social">
                                    <a href=""><i className="bi bi-twitter-x"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
