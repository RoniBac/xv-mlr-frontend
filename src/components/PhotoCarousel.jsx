import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'

const images = [
  '/foto1.jpg',
  '/foto2.jpg',
  '/foto3.jpg'
]

function PhotoCarousel() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((prev) => (prev + 1) % images.length)
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length)

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: true
  })

  return (
    <div className="carousel-container" {...handlers}>
      <img
        src={images[index]}
        alt={`Foto ${index + 1}`}
        className="carousel-image"
      />

      {/* Dots */}
      <div className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}

export default PhotoCarousel
