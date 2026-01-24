import { useNavigate } from 'react-router-dom'

const albums = [
  { 
    id: 'fotos', 
    title: 'Fotos', 
    description: 'Todas las fotos de la XV', 
    preview: '/xv.jpeg' 
  },
  { 
    id: 'ceremonia', 
    title: 'Ceremonia', 
    description: 'Fotos de la ceremonia oficial', 
    preview: '/xv2.jpeg' 
  },
  { 
    id: 'evento', 
    title: 'Evento', 
    description: 'Fotos y videos del evento oficial', 
    preview: '/xv3.jpeg' 
  },
  { 
    id: 'momentos', 
    title: 'Momentos', 
    description: 'Sube tus videos y fotos después del evento', 
    preview: '/assets/images/album-momentos.jpg' 
  }
]

function Album() {
  const navigate = useNavigate()

  return (
    <div className="body-album">
      <h1>Álbum Oficial</h1>
      <div className="album-grid">
        {albums.map(album => (
          <div 
            key={album.id} 
            className="album-card"
            onClick={() => navigate(`/album/${album.id}`)}
          >
            <img className="album-prev-img" src={album.preview} alt={album.title} />
            <h2>{album.title}</h2>
            <h3>{album.description}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Album
