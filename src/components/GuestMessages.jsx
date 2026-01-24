function GuestMessages() {
  const messages = [
    { name: 'Familia López Martínez', msg: 'Felicidades bella por tus XV' },
    { name: 'Tíos Rodríguez', msg: 'Que tengas un día inolvidable' },
    { name: 'Amigos', msg: 'Mucho éxito y alegría siempre' },
    { name: 'Primos', msg: 'Que disfrutes cada momento' }
  ]

  return (
    <div className="guest-messages-section">
      <img src="/chatting.png" alt="reloj" className="guest-messages-img" />
      <p className="guest-messages-title">Mensajes de invitados</p>
      <div className="messages-container">
        {messages.map((m, i) => (
          <div key={i} className="message-card">
            <p className="message-text">"{m.msg}"</p>
            <p className="message-name">- {m.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GuestMessages
