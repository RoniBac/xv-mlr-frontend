const colors = [
  { name: 'Dorado', hex: '#efb810' },
  { name: 'Champagne', hex: '#f9db5c' },
  { name: 'Beige', hex: '#ffff94' },
  { name: 'Café', hex: '#664300' }
]

function DressCode() {
  return (
    <section className="dresscode">
      <p className="dresscode-type">Formal</p>

      <div className="dresscode-images">
        <img src="/Dres_H.png" alt="Dress Code H" />
        <img src="/Dres_M.png" alt="Dress Code M" />
      </div>

      <p className="dresscode-colors-title">Colores permitidos</p>

      <div className="color-palette">
        {colors.map((c, i) => (
          <div
            key={i}
            className="color-box"
            style={{ backgroundColor: c.hex }}
          >
            <span className="color-tooltip">
              {c.name} <br /> {c.hex}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DressCode
