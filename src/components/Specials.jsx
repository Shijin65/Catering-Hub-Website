export default function Specials() {
    return (
        <section id="specials" className="specials section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Our Services</h2>
                <p>Complete Event Management Solutions</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row">
                    <div className="col-lg-3">
                        <ul className="nav nav-tabs flex-column">
                            <li className="nav-item">
                                <a className="nav-link active show" data-bs-toggle="tab" href="#specials-tab-1">Catering Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#specials-tab-2">Waiting Staff</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#specials-tab-4">Cleaning Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#specials-tab-5">Event Supervision</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-9 mt-4 mt-lg-0">
                        <div className="tab-content">
                            <div className="tab-pane active show" id="specials-tab-1">
                                <div className="row">
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Traditional & Premium Catering</h3>
                                        <p className="fst-italic">We offer a wide range of menu options tailored to your taste and tradition.</p>
                                        <p>Whether it's a traditional Kerala Sadhya or a modern buffet, our catering service focuses on hygiene, taste, and presentation. We use only the finest ingredients to ensure every bite is a delightful experience for your guests.</p>
                                    </div>
                                    <div className="col-lg-4 text-center order-1 order-lg-2">
                                        <img src="assets/img/specials-1.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="specials-tab-2">
                                <div className="row">
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Professional Waiting Staff</h3>
                                        <p className="fst-italic">Well-disciplined, uniformed, and professional waiters for your events.</p>
                                        <p>Hospitality is our strength. Our waiting staff are trained to be polite, efficient, and proactive. They are equipped to handle large crowds smoothly, ensuring that every guest is served with care and professionalism.</p>
                                    </div>
                                    <div className="col-lg-4 text-center order-1 order-lg-2">
                                        <img src="assets/img/specials-2.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane" id="specials-tab-4">
                                <div className="row">
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Event Cleaning & Maintenance</h3>
                                        <p className="fst-italic">Pre-event setup and post-event cleanup services.</p>
                                        <p>We take care of the heavy lifting. From setting up the dining area to thorough post-event cleaning, our dedicated staff ensures that the venue remains spotless and organized throughout the celebration.</p>
                                    </div>
                                    <div className="col-lg-4 text-center order-1 order-lg-2">
                                        <img src="assets/img/specials-4.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="specials-tab-5">
                                <div className="row">
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Professional Event Supervision</h3>
                                        <p className="fst-italic">Experienced supervisors to manage all manpower on-site.</p>
                                        <p>Our event supervisors act as your direct point of contact. They coordinate between the kitchen and the dining area, manage the staff, and ensure that everything runs perfectly on schedule, giving you total peace of mind.</p>
                                    </div>
                                    <div className="col-lg-4 text-center order-1 order-lg-2">
                                        <img src="assets/img/specials-5.png" alt="" className="img-fluid" />
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
