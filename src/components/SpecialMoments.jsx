import { useNavigate } from 'react-router-dom'

function SpecialMoments() {
  const navigate = useNavigate()

  return (
    <div className="section special-moments">
      <h4>Momentos Especiales</h4>
      <p className='special-moments'>¡Aquí puedes ver los momentos más especiales de la XV!</p>

      <div
        className="album-button"
        onClick={() => navigate('/album')}
      >
        <img src="/album.png" alt="Álbum" />
        <span>Mira el álbum de fotos</span>
      </div>
    </div>
  )
}

export default SpecialMoments
