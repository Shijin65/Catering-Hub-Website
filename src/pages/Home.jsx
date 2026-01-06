import Hero from '../components/Hero';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import Specials from '../components/Specials';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Team from '../components/Team';
import Partners from '../components/Partners';

export default function Home() {
    return (
        <main className="main">
            <Hero />
            <About />
            <WhyUs />
            <Specials />
            <Events />
            <Partners />
            <Gallery />
            <Team />
            <Contact />
        </main>
    );
}
