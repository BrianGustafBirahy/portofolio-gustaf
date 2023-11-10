import Header from "../components/Header"
import NavBar from "../components/NavBar"
import About from "../components/About"
import Hobi from "../components/Hobi"
import Portofolio from "../components/Portofolio"
import Pendidikan from "../components/Pendidikan"
import Hire from "../components/Hire"
import Organization from "../components/Organization"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

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
    <Footer/>
    </div>
  )
}

export default HomePages