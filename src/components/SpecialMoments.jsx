import { useNavigate } from 'react-router-dom'

function SpecialMoments() {
  const navigate = useNavigate()

  return (
    <div className="special-moments">
      <img src="/glitter.png" alt="reloj" className='special-img'/>
      <p className='special-title'>Momentos Especiales</p>
      <p className='special-moments-text'>¡Aquí puedes ver los momentos más especiales de la XV!</p>

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
