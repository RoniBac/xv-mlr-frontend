function SpecialMoments() {
  const handleClick = () => {
    // solo click visual, no hace nada
    console.log('Álbum aún no disponible')
  }

  return (
    <div className="special-moments">
      <img src="/glitter.png" alt="reloj" className="special-img" />
      <p className="special-title">Momentos Especiales</p>
      <p className="special-moments-text">
        ¡Aquí puedes ver los momentos más especiales de la XV!
      </p>

      <div className="album-wrapper">
        <div className="album-button album-disabled" onClick={handleClick}>
          <img src="/album.png" alt="Álbum" />
          <span className="album-title">Álbum exclusivo</span>
          <span className="album-subtitle">Próximamente</span>
        </div>
      </div>
    </div>
  )
}

export default SpecialMoments
