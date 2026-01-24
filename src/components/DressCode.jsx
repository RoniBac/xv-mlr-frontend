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
      </div>
      
    </section>
  )
}

export default DressCode
