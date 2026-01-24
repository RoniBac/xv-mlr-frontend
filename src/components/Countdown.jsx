import { useState, useEffect } from 'react'

function Countdown() {
  const eventDate = new Date('2026-03-07T17:00:00')
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const diff = eventDate - now
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
  <div className="countdown">
    <img src="/reloj.png" alt="reloj" className="countdown-icon" />
    <p className='countdown-title'>Falta</p>

    <div className="countdown-grid">

      <div className="time-block">
        <span className="number">{timeLeft.days}</span>
        <span className="label">Días</span>
      </div>

      <span className="colon">:</span>

      <div className="time-block">
        <span className="number">{timeLeft.hours}</span>
        <span className="label">Horas</span>
      </div>

      <span className="colon">:</span>

      <div className="time-block">
        <span className="number">{timeLeft.minutes}</span>
        <span className="label">Minutos</span>
      </div>

      <span className="colon">:</span>

      <div className="time-block">
        <span className="number">{timeLeft.seconds}</span>
        <span className="label">Segundos</span>
      </div>

    </div>
  </div>
)

}

export default Countdown
