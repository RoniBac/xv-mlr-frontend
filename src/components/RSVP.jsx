import { useState } from 'react'

const families = [
  { id: 1, last_name: 'Pérez' },
  { id: 2, last_name: 'García' },
  { id: 3, last_name: 'López' },
  { id: 4, last_name: 'Martínez' },
  { id: 5, last_name: 'Ramírez' },
  { id: 6, last_name: 'Hernández' },
  { id: 7, last_name: 'Sánchez' },
  { id: 8, last_name: 'Torres' },
]

function RSVP() {
  const [search, setSearch] = useState('')
  const [filtered, setFiltered] = useState(families)
  const [selected, setSelected] = useState(null)
  const [attending, setAttending] = useState(null)
  const [message, setMessage] = useState('')

  const handleSearch = (value) => {
    setSearch(value)
    setFiltered(
      families.filter(f =>
        f.last_name.toLowerCase().includes(value.toLowerCase())
      )
    )
  }

  const resetSelection = () => {
    setSelected(null)
    setSearch('')
    setAttending(null)
    setMessage('')
  }

  const handleConfirm = () => {
    if (attending === true) {
      alert('¡Gracias por confirmar! Te esperamos 😊')
    } else if (attending === false) {
      if (window.confirm('¿Estás seguro que no podrás asistir?')) {
        alert('Lamentamos que no puedas venir 😢')
      }
    }
  }

  return (
    <section className="rsvp-section">
      <img src="/formulario.png" alt="reloj" className='rsvp-img'/>
      <p className='rsvp-title'>Confirmar asistencia</p>

      {/* BUSCADOR */}
      {!selected && (
        <div className="form-group">
          <label>Busca tu apellido</label>
          <input
            type="text"
            placeholder="Ej. López"
            value={search}
            onChange={e => handleSearch(e.target.value)}
          />

          {search && (
            <ul className="dropdown">
              {filtered.map(f => (
                <li
                  key={f.id}
                  onClick={() => {
                    setSelected(f)
                    setSearch('')
                  }}
                >
                  {f.last_name}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* FORMULARIO */}
      {selected && (
        <div className="rsvp-form">
          <p className="info-text">
            Seleccionada:
            <strong className='sel-rsvp'> {selected.last_name}</strong>
          </p>

          <button className="link-btn" onClick={resetSelection}>
            Cambiar apellido
          </button>

          <div className="form-group">
            <label>¿Asistirán al evento?</label>

            <label>
              <input
                type="radio"
                name="attend"
                onChange={() => setAttending(true)}
              />
              Sí, asistiremos
            </label>

            <label>
              <input
                type="radio"
                name="attend"
                onChange={() => setAttending(false)}
              />
              No podremos asistir
            </label>
          </div>

          {attending === true && (
            <div className="form-group">
              <label>Mensaje para la quinceañera</label>
              <textarea
                placeholder="Escribe un mensaje bonito 💛"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </div>
          )}

          <button className="primary-btn" onClick={handleConfirm}>
            GENERAR
          </button>
        </div>
      )}
    </section>
  )
}

export default RSVP
