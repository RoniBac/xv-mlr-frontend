import { useParams } from 'react-router-dom'

// Datos de ejemplo
const albumData = {
  fotos: [
    '/assets/images/foto1.jpg',
    '/assets/images/foto2.jpg'
  ],
  ceremonia: [
    '/assets/images/ceremonia1.jpg'
  ],
  evento: [
    '/assets/videos/evento1.mp4'
  ],
  momentos: [
    '/assets/videos/momento1.mp4'
  ]
}

// Número de WhatsApp y mensaje predefinido
const whatsappNumber = '5211234567890' // 52 + lada + número
const whatsappMessage = encodeURIComponent('Hola! Quiero enviar un video para los Momentos de la XV :)')

function AlbumSection() {
  const { id } = useParams()
  const items = albumData[id] || []

  return (
    <div className="container">
      <h2>{id.charAt(0).toUpperCase() + id.slice(1)}</h2>
      <div className="album-items-grid">
        {items.map((item, i) => (
          <div key={i} className="album-item">
            {item.endsWith('.mp4') ? (
              <video controls width="100%">
                <source src={item} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={item} alt={`Item ${i+1}`} />
            )}
          </div>
        ))}
      </div>

      {/* Solo para la sección "momentos" */}
      {id === 'momentos' && (
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="primary"
            style={{ padding: '0.7rem 1.2rem', borderRadius: '8px', display: 'inline-block', textDecoration: 'none' }}
          >
            Enviar tu video por WhatsApp
          </a>
          <p style={{ marginTop: '0.5rem', color: '#a87b05' }}>
            Puedes enviar tu video y se agregará al álbum de Momentos.
          </p>
        </div>
      )}
    </div>
  )
}

export default AlbumSection
