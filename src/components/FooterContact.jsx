function FooterContact() {
  const whatsappNumber = '518124077280'
  const whatsappMessage = encodeURIComponent(
    '¡Hola! Me interesa una invitación web personalizada 🎉'
  )

  return (
    <footer className="footer-contact">
      <div className="footer-content">
        <h3>Invitaciones Web Personalizadas</h3>
        <p className="footer-text">
          ¿Te gustaría una invitación digital elegante y moderna para tu evento?
          <br />
          Contáctame y con gusto te ayudo ✨
        </p>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          <img src="/whatsapp.png" alt="WhatsApp" />
          Escríbeme por WhatsApp
        </a>

        <p className="footer-email">
          O envíame un correo:
          <br />
          <a href="mailto:ron.lopez.ru@gmail.com">ron.lopez.ru@gmail.com</a>
        </p>

        <span className="footer-copy">
          © {new Date().getFullYear()} Invitaciones Web
        </span>
      </div>
    </footer>
  )
}

export default FooterContact
