import { Link } from 'react-router-dom';
import Specials from '../components/Specials';

export default function ServicesPage() {
    return (
        <>
            <div className="page-header d-flex align-items-center" style={{ backgroundImage: "url('/assets/img/gallery/team-group-5.jpg')" }}>
                <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h2>Our Services</h2>
                            {/* <p>Complete Event Manpower Solutions</p> */}
                            <nav className="breadcrumbs">
                                <ol>
                                    <li><Link to="/">Home</Link></li>
                                    <li className="current">Services</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <Specials />
        </>
    );
}
