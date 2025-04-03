import { Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import OurProjects from "./pages/OurProjects"
import About from "./pages/About"
import Layout from "./components/Layout"


function App() {

  return (
   <Layout>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/projects" element={<OurProjects/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
   </div>
   </Layout>
  )
}

export default App
