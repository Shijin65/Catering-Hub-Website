import Hero from '../components/Hero';
import About from '../components/About';
import Specials from '../components/Specials';
import Events from '../components/Events';
import Partners from '../components/Partners';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <main className="main">
            <Hero />
            <About />
            <Specials />
            <Events />
            <Partners />
            <Contact />
        </main>
    );
}
