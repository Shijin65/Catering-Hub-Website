export default function Events() {
    return (
        <section id="events" className="events section">
            <img className="slider-bg" src="assets/img/events-bg.jpg" alt="" data-aos="fade-in" />
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
                                    <img src="assets/img/events-slider/events-slider-1.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h3>Birthday Parties</h3>
                                    <div className="price">
                                        <p><span>$189</span></p>
                                    </div>
                                    <p className="fst-italic">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
                                    </p>
                                    <ul>
                                        <li><i className="bi bi-check2-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                                        <li><i className="bi bi-check2-circle"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                                        <li><i className="bi bi-check2-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                                    </ul>
                                    <p>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="row gy-4 event-item">
                                <div className="col-lg-6">
                                    <img src="assets/img/events-slider/events-slider-2.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h3>Private Parties</h3>
                                    <div className="price">
                                        <p><span>$290</span></p>
                                    </div>
                                    <p className="fst-italic">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
                                    </p>
                                    <ul>
                                        <li><i className="bi bi-check2-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                                        <li><i className="bi bi-check2-circle"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                                        <li><i className="bi bi-check2-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                                    </ul>
                                    <p>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="row gy-4 event-item">
                                <div className="col-lg-6">
                                    <img src="assets/img/events-slider/events-slider-3.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h3>Custom Parties</h3>
                                    <div className="price">
                                        <p><span>$99</span></p>
                                    </div>
                                    <p className="fst-italic">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
                                    </p>
                                    <ul>
                                        <li><i className="bi bi-check2-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                                        <li><i className="bi bi-check2-circle"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                                        <li><i className="bi bi-check2-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                                    </ul>
                                    <p>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur
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
