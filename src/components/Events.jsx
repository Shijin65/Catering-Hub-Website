export default function Events() {
    return (
        <section id="events" className="events section">

            <div className="container section-title" data-aos="fade-up">
                <h2>Events</h2>
                <p>Creating Memorable Event Experiences</p>
            </div>

            <div className="container">
                <div className="swiper init-swiper" data-aos="fade-up" data-aos-delay="100">
                    <script type="application/json" className="swiper-config" dangerouslySetInnerHTML={{
                        __html: `
            {
              "loop": true,
              "speed": 600,
              "autoplay": {
                "delay": 5000
              },
              "slidesPerView": "auto",
              "pagination": {
                "el": ".swiper-pagination",
                "type": "bullets",
                "clickable": true
              }
            }
          ` }}></script>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="row gy-4 event-item">
                                <div className="col-lg-6">
                                    <img src="/assets/img/grand-weddings.jpg" className="img-fluid event-img" alt="Grand Weddings" />
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h3>Grand Weddings</h3>
                                    <div className="price">
                                        <p><span>Premium Pricing</span></p>
                                    </div>
                                    <p className="fst-italic">
                                        We provide end-to-end manpower solutions to make your big day unforgettable.
                                    </p>
                                    <ul>
                                        <li><i className="bi bi-check2-circle"></i> <span>Uniformed waiting staff for a premium guest experience.</span></li>
                                        <li><i className="bi bi-check2-circle"></i> <span>Experienced site supervisors to ensure smooth operations.</span></li>
                                        <li><i className="bi bi-check2-circle"></i> <span>Dedicated event supervisors to manage all staff on-site.</span></li>
                                    </ul>
                                    <p>
                                        Our wedding services focus on discipline and elegance. We ensure that your guests are served with the highest standards of hospitality, while our team ensures everything runs flawlessly.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="row gy-4 event-item">
                                <div className="col-lg-6">
                                    <img src="/assets/img/corporate-events.jpg" className="img-fluid event-img" alt="Corporate Events" />
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h3>Corporate Events</h3>
                                    <div className="price">
                                        <p><span>Flexible Packages</span></p>
                                    </div>
                                    <p className="fst-italic">
                                        Professional staffing for business meetings and corporate galas.
                                    </p>
                                    <ul>
                                        <li><i className="bi bi-check2-circle"></i> <span>Punctual and professional staff for formal service.</span></li>
                                        <li><i className="bi bi-check2-circle"></i> <span>Tailored staffing packages for corporate groups.</span></li>
                                        <li><i className="bi bi-check2-circle"></i> <span>Efficient setup and quick cleanup to respect your schedule.</span></li>
                                    </ul>
                                    <p>
                                        We understand the importance of timing and professionalism in corporate settings. Our team is trained to provide discreet yet attentive service, ensuring your business event proceeds smoothly.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="row gy-4 event-item">
                                <div className="col-lg-6">
                                    <img src="/assets/img/social-gatherings.jpg" className="img-fluid event-img" alt="Social Gatherings" />
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h3>Social Gatherings</h3>
                                    <div className="price">
                                        <p><span>Affordable Solutions</span></p>
                                    </div>
                                    <p className="fst-italic">
                                        From birthday parties to family reunions, we bring the best support to your home.
                                    </p>
                                    <ul>
                                        <li><i className="bi bi-check2-circle"></i> <span>Flexible manpower options (waiters/helpers) for any crowd size.</span></li>
                                        <li><i className="bi bi-check2-circle"></i> <span>Customizable staffing plans to suit your family's preferences.</span></li>
                                        <li><i className="bi bi-check2-circle"></i> <span>Friendly and helpful staff to make your guests feel at home.</span></li>
                                    </ul>
                                    <p>
                                        Small events deserve big attention. We provide the same level of care and professional manpower for family gatherings as we do for large weddings, making sure you can focus on your guests.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
}
