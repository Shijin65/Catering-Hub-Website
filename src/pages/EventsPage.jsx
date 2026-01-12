import { Link } from 'react-router-dom';
import Events from '../components/Events';

export default function EventsPage() {
    return (
        <>
            <div className="page-header d-flex align-items-center" style={{ backgroundImage: "url('/assets/img/gallery/team-group-5.jpg')" }}>
                <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h2>Events</h2>
                            {/* <p>Creating Memorable Experiences</p> */}
                            <nav className="breadcrumbs">
                                <ol>
                                    <li><Link to="/">Home</Link></li>
                                    <li className="current">Events</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <Events />
        </>
    );
}
