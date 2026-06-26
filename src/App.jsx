import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import Threats from './pages/Threats/Threats.jsx'
import ThreatDetail from './pages/ThreatDetail/ThreatDetail.jsx'
import Tools from './pages/Tools/Tools.jsx'
import Learn from './pages/Learn/Learn.jsx'
import About from './pages/About/About.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ameacas" element={<Threats />} />
          <Route path="/ameacas/:id" element={<ThreatDetail />} />
          <Route path="/ferramentas" element={<Tools />} />
          <Route path="/aprenda" element={<Learn />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
