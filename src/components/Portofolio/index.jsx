const Portofolio = () => {
  return (
    <section className="section" id="portfolio">
        <div className="container text-center">
        <p className="section-subtitle">What I Did ?</p>
        <h6 className="section-title mb-6">Portfolio</h6>
        {/* row */}
        <div className="row">
            <div className="col-md-4">
            <a href="#" className="portfolio-card">
                <img src="https://github.com/BrianGustafBirahy/portofolio-gustaf/blob/develop/public/imgs/TUC%20Anniversary.png?raw=true" className="portfolio-card-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                    <h4>Design Poster</h4>
                    <p className="font-weight-normal">Category: Poster Event</p>
                </span>
                </span>
            </a>
            </div>
            <div className="col-md-4">
            <a href="#" className="portfolio-card">
                <img className="portfolio-card-img" src="https://github.com/BrianGustafBirahy/portofolio-gustaf/blob/develop/public/imgs/TUC%20Homecoming1_rev4.png?raw=true" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                    <h4>Design Poster</h4>
                    <p className="font-weight-normal">Category: Poster Event</p>
                </span>
                </span>
            </a>
            </div>
            <div className="col-md-4">
            <a href="#" className="portfolio-card">
                <img className="portfolio-card-img" src="https://github.com/BrianGustafBirahy/portofolio-gustaf/blob/develop/public/imgs/HS_27Oktober2023.png?raw=true" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                    <h4>Design Poster</h4>
                    <p className="font-weight-normal">Category: Poster Sabat</p>
                </span>
                </span>
            </a>
            </div>
        </div>{/* end of row */}
        </div>{/* end of container */}
    </section>
  )
}

export default Portofolio