import { useRef, useState } from 'react'

function SpotifyPlayer() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <>
      {/* Audio invisible */}
      <audio ref={audioRef} src="/assets/music/cancion.mp3" />

      {/* Botón flotante */}
      <button
        onClick={togglePlay}
        style={{
           position: 'fixed',
            bottom: '20px',
            left: '20px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: 'none',
            background: '#d49a6a',
            color: '#fff',
            fontSize: '1.5rem',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
            display: 'flex',           // 🔹 flex
            justifyContent: 'center',  // 🔹 centrar horizontal
            alignItems: 'center',      // 🔹 centrar vertical
            zIndex: 1000
        }}
        title={isPlaying ? 'Pausar música' : 'Reproducir música'}
      >
        {isPlaying ? '⏸' : '▶️'}
      </button>
    </>
  )
}

export default SpotifyPlayer
