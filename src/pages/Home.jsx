import Hero from '../components/Hero';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import Menu from '../components/Menu';
import Specials from '../components/Specials';
import Events from '../components/Events';
import BookATable from '../components/BookATable';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Chefs from '../components/Chefs';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <main className="main">
            <Hero />
            <About />
            <WhyUs />
            {/* <Menu /> */}
            <Specials />
            <Events />
            <BookATable />
            <Testimonials />
            <Gallery />
            <Chefs />
            <Contact />
        </main>
    );
}
