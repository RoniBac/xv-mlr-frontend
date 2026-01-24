import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Invitation from './pages/Invitation'   // tu "Home"
import Album from './pages/Album'
import AlbumSection from './pages/AlbumSection'
import CamilaGame from './pages/CamilaGame'

function App() {
  return (
    
    <Router>
      <Routes>
        {/* "/" será la ruta principal, y carga Invitation */}
        <Route path="/" element={<Invitation />} />
        <Route path="/album" element={<Album />} />
        <Route path="/album/:id" element={<AlbumSection />} />
        <Route path="/camila" element={<CamilaGame />} />
      </Routes>
    </Router>
  )
}

export default App
