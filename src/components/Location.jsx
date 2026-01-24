function Location() {
  const iglesiaDirections =
    'https://www.google.com/maps/dir/?api=1&destination=Iglesia+Sagrado+Corazon+de+Jesus+El+Limon+Tamaulipas'

  const salonDirections =
    'https://www.google.com/maps/dir/?api=1&destination=Aguilas+De+La+Victoria+El+Limon+Tamaulipas'


    return (
    <section className="location-section">
      {/* IGLESIA */}
      <div className="location-card">
        <img
          src="/lugar.jpeg"
          alt="Iglesia"
          className="location-image"
        />

        <p className="location-title">Iglesia Sagrado Corazón de Jesús</p>
        <p className="location-p">Miguel Hidalgo y Costilla 210, 89910 El Limón, Tamps.</p>

        <div className="map-container">
          <iframe
            title="Mapa Iglesia"
            src="https://www.google.com/maps?q=Iglesia+Sagrado+Corazon+de+Jesus+El+Limon+Tamaulipas&output=embed"
            loading="lazy"
          />
        </div>

        <button
          className="map-button"
          onClick={() => window.open(iglesiaDirections, '_blank')}
        >
          Cómo llegar
        </button>
      </div>

      {/* SALÓN */}
      <div className="location-card">
        <img
          src="/lugar2.JPG"
          alt="Salón"
          className="location-image"
        />

        <p className="location-title">Aguilas De La Victoria</p>
        <p className="location-p">89753 Xicoténcatl, Tamaulipas</p>

        <div className="map-container">
          <iframe
            title="Mapa Salón"
            src="https://www.google.com/maps?q=Aguilas+De+La+Victoria+El+Limon+Tamaulipas&output=embed"
            loading="lazy"
          />
        </div>

        <button
          className="map-button"
          onClick={() => window.open(salonDirections, '_blank')}
        >
          Cómo llegar
        </button>
      </div>
    </section>
  )
}

export default Location
