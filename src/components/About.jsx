export default function About() {
    return (
        <section id="about" className="about section">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4">
                    <div className="col-lg-6 order-1 order-lg-2">
                        <img src="/assets/img/gallery/team-group-1.jpg" className="img-fluid about-img" alt="Best Ever Catering Team" />
                    </div>
                    <div className="col-lg-6 order-2 order-lg-1 content">
                        <h3>Leading the Industry in Catering and Event Staffing</h3>
                        <p className="fst-italic">
                            Best Ever Catering & Manpower Services provides a comprehensive solution for your events. From delicious, high-quality food to professionally trained manpower, we make every event successful and stress-free.
                        </p>
                        <ul>
                            <li><i className="bi bi-check2-all"></i> <span>Premium catering services for weddings, corporate events, and parties.</span></li>
                            <li><i className="bi bi-check2-all"></i> <span>Professional manpower staffing including waiters and event staff.</span></li>
                            <li><i className="bi bi-check2-all"></i> <span>Highly experienced team dedicated to delivering excellence and satisfied smiles.</span></li>
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
