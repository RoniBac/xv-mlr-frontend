function GiftSuggestion() {
  return (
    <section className="gift-section">
      <img src="/gift.png" alt="reloj" className="gift-img" />
      <p className="gift-title">Sugerencia de regalo</p>

      <p className="gift-text">
        Tu compañía en este día tan especial es el mejor regalo.
        <br />
        Pero si deseas darme un obsequio, aquí algunas opciones:
      </p>

      <div className="gift-option vertical">
        <img src="/carta.png" alt="sobre" />
        <p className="gift-sobre">SOBRE</p>
      </div>
    </section>
  )
}

export default GiftSuggestion

