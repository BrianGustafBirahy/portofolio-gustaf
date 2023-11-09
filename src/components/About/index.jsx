const About = () => {
  return (
    <section className="section pt-0" id="about">
        {/* container */}
        <div className="container text-center">
        {/* about wrapper */}
        <div className="about">
            <div className="about-img-holder">
            <img src="/public/imgs/gustaf.jpg" className="about-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
            </div>
            <div className="about-caption">
            <p className="section-subtitle">Who Am I ?</p>
            <h2 className="section-title mb-3">About Me</h2>
            <p>
                    Saya adalah seorang pemuda biasa yang saat ini masih berusaha untuk belajar hal-hal baru. Saya senang 
                dapat belajar di Universitas Klabat. Menurut saya Universitas Klabat merupakan salah satu Universitas 
                terbaik di Sulawesi Utara.
                <br />  Saya memilih Jurusan Informatika karena saya sangat tertarik dengan segala perkembangan teknologi 
                di jaman sekarang ini, khususnya pada bidang desain grafis. Semakin saya mempelajari desain grafis, 
                semakin jatuh cinta saya pada bidang tersebut. Namun saat ini saya masih termasuk kedalam golongan
                desainer abal-abal. HAHA!
            </p>
            <button className="btn-rounded btn btn-outline-primary mt-4">Download CV</button>
            </div>
        </div>{/* end of about wrapper */}
        </div>{/* end of container */}
    </section>
  )
}

export default About