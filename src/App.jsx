
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import ModuleDetails from './pages/ModuleDetails'
import About from './pages/About'
import Contact from './pages/Contact'
import Modules from './pages/Modules'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Header />

      <main>

        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/modules/:id" element={<ModuleDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </>

  )
}

export default App
