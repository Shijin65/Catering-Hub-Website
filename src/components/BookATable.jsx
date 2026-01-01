export default function BookATable() {
    return (
        <section id="book-a-table" className="book-a-table section">
            <div className="container section-title" data-aos="fade-up">
                <h2>BOOKING</h2>
                <p>Book an Event</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <form action="#" method="post" role="form" className="php-email-form">
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required="" />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required="" />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" required="" />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <input type="date" name="date" className="form-control" id="date" placeholder="Event Date" required="" />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <input type="time" className="form-control" name="time" id="time" placeholder="Event Time" required="" />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <input type="number" className="form-control" name="people" id="people" placeholder="Expected Guests" required="" />
                        </div>
                    </div>

                    <div className="form-group mt-3">
                        <textarea className="form-control" name="message" rows="5" placeholder="Tell us more about your event (Catering, Manpower, or both)"></textarea>
                    </div>

                    <div className="text-center mt-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your booking request was sent. We will call you back to confirm. Thank you!</div>
                        <button type="submit">Submit Request</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
