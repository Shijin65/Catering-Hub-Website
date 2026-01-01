export default function Gallery() {
    const images = import.meta.glob(
        "../assets/img/gallery/*.{jpg,jpeg,png,webp}",
        { eager: true }
    );

    return (
        <section id="gallery" className="gallery section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Gallery</h2>
                <p>Some photos from Our Events</p>
            </div>

            <div
                className="container-fluid"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <div className="row g-0">
                    {Object.values(images).map((img, index) => (
                        <div className="col-lg-3 col-md-4" key={index}>
                            <div className="gallery-item">
                                <a
                                    href={img.default}
                                    className="glightbox"
                                    data-gallery="images-gallery"
                                >
                                    <img
                                        src={img.default}
                                        alt={`Best Ever Catering ${index + 1}`}
                                        className="img-fluid"
                                        style={{ height: '500px', width: '100%', objectFit: 'cover' }}
                                    />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
