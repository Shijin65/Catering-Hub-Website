export default function Specials() {
    return (
        <section id="specials" className="specials section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Our Services</h2>
                <p>Complete Event Manpower Solutions</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row gy-4 mb-5">
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="card-item">
                            <span>01</span>
                            <h4>Professional Staff</h4>
                            <p>We provide well-trained, disciplined, and uniformed manpower (waiters/staff) to ensure premium hospitality for your guests.</p>
                        </div>
                    </div>
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="card-item">
                            <span>02</span>
                            <h4>Reliable Event Support</h4>
                            <p>Our experienced team provides comprehensive support services including security, housekeeping, and site supervision.</p>
                        </div>
                    </div>
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="card-item">
                            <span>03</span>
                            <h4>End-to-End Solutions</h4>
                            <p>From event staff to supervisors, we manage every aspect of manpower so you can enjoy your event without worries.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3">
                        <ul className="nav nav-tabs flex-column">
                            <li className="nav-item">
                                <a className="nav-link active show" data-bs-toggle="tab" href="#specials-tab-1">Hosting Girls & Boys</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#specials-tab-2">Service Boys & Girls</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#specials-tab-3">Stage Hosting</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#specials-tab-4">Anchoring</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#specials-tab-5">Security</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#specials-tab-6">Housekeeping</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#specials-tab-7">Site Supervisors</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-9 mt-4 mt-lg-0">
                        <div className="tab-content">
                            <div className="tab-pane active show" id="specials-tab-1">
                                <div className="row">
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Hosting Girls & Boys</h3>
                                        <p className="fst-italic">Create a perfect first impression.</p>
                                        <p>Our well-groomed and professional hosting staff welcomes your guests with a warm smile. They manage the guest list, guide attendees to their seats, and ensure a smooth flow at the entrance, adding a touch of elegance to your event.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="specials-tab-2">
                                <div className="row">
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Service Boys & Girls</h3>
                                        <p className="fst-italic">Efficient and polite waiting staff.</p>
                                        <p>Our service team is trained to handle food and beverage service with grace. Whether it's a buffet or sit-down dinner, they ensure that every guest is attended to promptly and professionally.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="tab-pane" id="specials-tab-3">
                                <div className="row">
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Stage Hosting</h3>
                                        <p className="fst-italic">Professional management of stage activities.</p>
                                        <p>Our stage hosts ensure that the protocol is followed and stage events run on time. They assist guests of honor, manage awards or gifts, and coordinate with the anchor to maintain the flow of the program.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="tab-pane" id="specials-tab-4">
                                <div className="row">
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Anchoring</h3>
                                        <p className="fst-italic">Engaging and lively event hosting.</p>
                                        <p>Our professional anchors keep the audience entertained and engaged. They manage the timeline, make announcements, and ensure high energy throughout the event, making it memorable for everyone.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="tab-pane" id="specials-tab-5">
                                <div className="row">
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Security</h3>
                                        <p className="fst-italic">Safety and crowd management.</p>
                                        <p>Our trained security personnel ensure the safety of your venue and guests. They manage parking, control crowds, and handle any situations discreetly to ensure a trouble-free event.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="tab-pane" id="specials-tab-6">
                                <div className="row">
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Housekeeping</h3>
                                        <p className="fst-italic">Spotless venues, always.</p>
                                        <p>Our dedicated housekeeping staff maintains cleanliness before, during, and after the event. They ensure restrooms are stocked, spills are cleaned immediately, and the venue remains pristine.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="tab-pane" id="specials-tab-7">
                                <div className="row">
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Site Supervisors</h3>
                                        <p className="fst-italic">Experienced on-ground management.</p>
                                        <p>Our site supervisors act as the captain of the ship. They coordinate all manpower teams, liaise with vendors, and troubleshoot any issues instantly to ensure your event proceeds exactly as planned.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
