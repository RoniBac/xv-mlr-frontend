import { useState, useEffect } from 'react'

function Countdown() {
  const eventDate = new Date('2026-01-30T18:00:00')
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
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <h2>Faltan</h2>
      <h1>{timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} :  {timeLeft.seconds}</h1>
      <p className='countdown'>&emsp;&emsp;Días   &emsp;&emsp;  Horas  &emsp; Minutos &emsp;    Segundos  </p>
    </div>
  )
}

export default Countdown
