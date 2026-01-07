export default function About() {
    return (
        <section id="about" className="about section">
            <div className="container section-title" data-aos="fade-up">
                <h2>About Us</h2>
                <p>Who We Are</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4">
                    <div className="col-lg-6 order-1 order-lg-2">
                        <img src="/assets/img/logo-be.jpg" className="img-fluid about-img" alt="Best Ever Catering Logo" />
                    </div>
                    <div className="col-lg-6 order-2 order-lg-1 content">
                        <h3>Leading the Industry in Event Staffing and Management</h3>
                        <p className="fst-italic">
                            Best Ever Catering & Manpower Services provides a comprehensive solution for your events. From professional hosting staff to experienced site supervisors, we make every event successful and stress-free.
                        </p>
                        <ul>
                            <li><i className="bi bi-check2-all"></i> <span>Hosting Girls & Boys</span></li>
                            <li><i className="bi bi-check2-all"></i> <span>Service Boys & Girls</span></li>
                            <li><i className="bi bi-check2-all"></i> <span>Stage Hosting</span></li>
                            <li><i className="bi bi-check2-all"></i> <span>Anchoring</span></li>
                            <li><i className="bi bi-check2-all"></i> <span>Security</span></li>
                            <li><i className="bi bi-check2-all"></i> <span>Housekeeping</span></li>
                            <li><i className="bi bi-check2-all"></i> <span>Site Supervisors</span></li>
                        </ul>
                        <p>
                            Based in Palakkad, Kerala, we pride ourselves on our attention to detail and our ability to provide well-disciplined staff that ensures your guests receive the best hospitality. Whether it's a small family gathering or a large-scale wedding, we have the resources to handle it all.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
