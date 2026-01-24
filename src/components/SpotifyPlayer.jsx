import { useRef, useState, useEffect } from 'react'

function SpotifyPlayer() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = true   // 🔇 empieza en silencio
      audioRef.current.play().catch(() => {})
    }
  }, [])

  const togglePlay = async () => {
    if (!audioRef.current) return

    if (audioRef.current.paused) {
      audioRef.current.muted = false // 🔊 sonido solo al click
      await audioRef.current.play()
      setIsPlaying(true)
    } else {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/cancion.mp3"
        autoPlay
        loop
        preload="auto"
      />

      <button
        onClick={togglePlay}
        className='button-play'
        title={isPlaying ? 'Pausar música' : 'Reproducir música'}
      >
        <img
          src={isPlaying ? '/pause.png' : '/play.png'}
          alt="control"
        />
      </button>
    </>
  )
}

export default SpotifyPlayer
