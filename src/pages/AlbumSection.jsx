import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Datos de ejemplo
const albumData = {
  fotos: [
    '/xv.jpeg','/xv.jpeg','/xv.jpeg','/xv.jpeg','/xv.jpeg','/xv.jpeg',
    '/xv.jpeg','/xv.jpeg','/xv.jpeg','/xv.jpeg','/xv.jpeg','/xv.jpeg',
    '/xv.jpeg','/xv.jpeg','/xv.jpeg','/xv.jpeg','/xv.jpeg','/xv.jpeg',
  ],
  ceremonia: ['/xv2.jpeg','/xv2.jpeg','/xv2.jpeg'],
  evento: ['/xv3.jpeg','/xv3.jpeg','/xv3.jpeg'],
  momentos: ['/assets/videos/momento1.mp4']
}

// WhatsApp
const whatsappNumber = '5211234567890'
const whatsappMessage = encodeURIComponent(
  'Hola! Quiero enviar un video para los Momentos de la XV :)'
)

function AlbumSection() {
  const { id } = useParams()
  const items = albumData[id] || []
  const navigate = useNavigate()

  const [selectedItem, setSelectedItem] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null) // índice que se está viendo

  useEffect(() => {
    let timer

    // ✅ Solo activamos si estamos en fotos y es el item 4 (índice 3)
    if (id === 'fotos' && hoveredIndex === 3) {
      timer = setTimeout(() => {
        navigate('/camila') // redirige al juego
      }, 25000) // 25 segundos
    }

    return () => clearTimeout(timer) // limpiar timeout si se mueve a otro item
  }, [hoveredIndex, id, navigate])

  return (
    <div className="body-album">
      <h1>{id ? id.charAt(0).toUpperCase() + id.slice(1) : 'Álbum'}</h1>

      <div className="album-items-grid">
        {items.map((item, i) => (
          <div
            key={i}
            className="album-item"
            onMouseEnter={() => setHoveredIndex(i)} // desktop
            onMouseLeave={() => setHoveredIndex(null)}
            onTouchStart={() => setHoveredIndex(i)} // mobile
            onTouchEnd={() => setHoveredIndex(null)}
          >
            {item.endsWith('.mp4') ? (
              <video controls width="100%">
                <source src={item} type="video/mp4" />
                Tu navegador no soporta video
              </video>
            ) : (
              <img
                src={item}
                alt={`Item ${i + 1}`}
                className="album-thumb"
                onClick={() => setSelectedItem(item)}
              />
            )}
          </div>
        ))}
      </div>

      {/* Solo para "momentos" */}
      {id === 'momentos' && (
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="primary"
            style={{
              padding: '0.7rem 1.2rem',
              borderRadius: '8px',
              display: 'inline-block',
              textDecoration: 'none'
            }}
          >
            Enviar tu video por WhatsApp
          </a>
          <p style={{ marginTop: '0.5rem', color: '#a87b05' }}>
            Puedes enviar tu video y se agregará al álbum de Momentos.
          </p>
        </div>
      )}

      {/* LIGHTBOX */}
      {selectedItem && (
        <div className="lightbox" onClick={() => setSelectedItem(null)}>
          <div className="lightbox-frame">
            <img src={selectedItem} alt="Vista completa" />
          </div>
        </div>
      )}
    </div>
  )
}

export default AlbumSection
