import About from "../components/AboutMe"
import Banner from "../components/Banner"
import Header from "../components/Header"
import Services from "../components/Services"
import Expertise from "../components/Expertise"
import Footer from "../components/Footer"


const Home = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Expertise/>
      <Footer/>
    </>
  )
}

export default Home