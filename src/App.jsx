
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import EventsPage from './pages/EventsPage';
import PartnersPage from './pages/PartnersPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function App() {
  useEffect(() => {
    // Ported from main.js

    // Global functions from vendor scripts
    const AOS = window.AOS;
    const GLightbox = window.GLightbox;
    const Isotope = window.Isotope;
    const Swiper = window.Swiper;
    const imagesLoaded = window.imagesLoaded;

    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    function toggleScrolled() {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (!selectHeader || (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top'))) return;
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }

    document.addEventListener('scroll', toggleScrolled);
    toggleScrolled(); // Init on load

    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

    function mobileNavToogle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
    }

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
    });

    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function (e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });

    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      // Since React mounts after load often, we might want to remove immediately or with short delay
      preloader.remove();
    }

    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector('.scroll-top');

    function toggleScrollTop() {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
    }
    if (scrollTop) {
      scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    document.addEventListener('scroll', toggleScrollTop);
    toggleScrollTop();

    /**
     * Animation on scroll function and init
     */
    function aosInit() {
      if (AOS) {
        AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });
      }
    }
    aosInit();

    /**
     * Initiate glightbox
     */
    if (GLightbox) {
      GLightbox({
        selector: '.glightbox'
      });
    }

    /**
     * Init isotope layout and filters
     */
    document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      let initIsotope;
      if (imagesLoaded && Isotope) {
        imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
          initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
            itemSelector: '.isotope-item',
            layoutMode: layout,
            filter: filter,
            sortBy: sort
          });
        });
      }

      isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
        filters.addEventListener('click', function () {
          isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          if (initIsotope) {
            initIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
          }
          if (typeof aosInit === 'function') {
            aosInit();
          }
        }, false);
      });

    });

    /**
     * Init swiper sliders
     */
    function initSwiperStart() {
      document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
        let config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );

        if (Swiper) {
          new Swiper(swiperElement, config);
        }
      });
    }
    initSwiperStart();

    /**
     * Navmenu Scrollspy
     */
    let navmenulinks = document.querySelectorAll('.navmenu a');

    function navmenuScrollspy() {
      navmenulinks.forEach(navmenulink => {
        if (!navmenulink.hash) return;
        let section = document.querySelector(navmenulink.hash);
        if (!section) return;
        let position = window.scrollY + 200;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
          navmenulink.classList.add('active');
        } else {
          navmenulink.classList.remove('active');
        }
      })
    }
    window.addEventListener('scroll', navmenuScrollspy);
    navmenuScrollspy();

    // Initial load effects
    return () => {
      document.removeEventListener('scroll', toggleScrolled);
      document.removeEventListener('scroll', toggleScrollTop);
      document.removeEventListener('scroll', navmenuScrollspy);
      if (mobileNavToggleBtn) mobileNavToggleBtn.removeEventListener('click', mobileNavToogle);
    };
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <ScrollToTopAndInit />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
      <div id="preloader"></div>
    </BrowserRouter>
  )
}

/**
 * ScrollToTopAndInit component handles scrolling to top and re-initializing 
 * vendor scripts like AOS, GLightbox, and Swiper on every route change.
 */
function ScrollToTopAndInit() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Re-initialize AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }

    // Re-initialize GLightbox
    if (window.GLightbox) {
      window.GLightbox({
        selector: '.glightbox'
      });
    }

    // Re-initialize Swiper sliders
    if (window.Swiper) {
      document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
        // Destroy existing instance if it exists to avoid memory leaks/conflicts
        if (swiperElement.swiper) {
          swiperElement.swiper.destroy();
        }

        const configElement = swiperElement.querySelector(".swiper-config");
        if (configElement) {
          try {
            const config = JSON.parse(configElement.innerHTML.trim());
            new window.Swiper(swiperElement, config);
          } catch (e) {
            console.error("Failed to parse swiper config", e);
          }
        }
      });
    }

    // Re-initialize Isotope
    if (window.Isotope && window.imagesLoaded) {
      document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
        let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
        let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
        let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

        window.imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
          new window.Isotope(isotopeItem.querySelector('.isotope-container'), {
            itemSelector: '.isotope-item',
            layoutMode: layout,
            filter: filter,
            sortBy: sort
          });
        });
      });
    }
  }, [pathname]);

  return null;
}

export default App
