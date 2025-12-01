import About from "./Components/About"
import Contact from "./Components/Contact"
import EducationSection from "./Components/EducationSection"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Projects from "./Components/Projects"
import SkillsSection from "./Components/SkillsSection"

function App() {
  return (
    <div>
     <Header/>
     <Hero/>
     <About/>
     <SkillsSection/>
     <EducationSection/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
