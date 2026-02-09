function InvitationDownload() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/invitacion-xv-bella.png' // o .pdf
    link.download = 'Invitacion_XV_Bella.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="rsvp-section">
      <img
        src="/formulario.png"
        alt="Invitación XV"
        className="rsvp-img"
      />

      <p className="rsvp-title">Invitación</p>

      <p className="info-text">
        Descarga la invitación oficial de los XV Años
      </p>

      <button className="primary-btn" onClick={handleDownload}>
        DESCARGAR INVITACIÓN
      </button>
    </section>
  )
}

export default InvitationDownload
