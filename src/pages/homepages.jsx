import Header from "../components/Header"
import NavBar from "../components/NavBar"
import About from "../components/About"
import Hobi from "../components/Hobi"
import Portofolio from "../components/Portofolio"
import Pendidikan from "../components/Pendidikan"
import Hire from "../components/Hire"
import Organization from "../components/Organization"
import Contact from "../components/Contact"

const HomePages = () => {
  return (
    <div>
    <NavBar />
    <Header />
    <About />
    <Hobi/>
    <Portofolio/>
    <Pendidikan/>
    <Hire/>
    <Organization/>
    <Contact/>
    {/* footer */}
    <div className="container">
        <footer className="footer">
        <p className="mb-0">Copyright
            © <a href="https://www.unklab.ac.id/">Brian Gustaf Birahy</a> 
        </p>
        <div className="social-links text-right m-auto ml-sm-auto">
            <a href="javascript:void(0)" className="link"><i className="ti-instagram" /></a>
        </div>
        </footer>
    </div> {/* end of page footer */}
    </div>
  )
}

export default HomePages