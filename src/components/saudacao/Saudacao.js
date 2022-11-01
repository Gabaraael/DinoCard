

function Saudacao({nome}) {
  function gerarSaudacao(anything) {
    return `Hello, ${anything}, are you okay?`
  }

  return (
    <div>
      <p>{nome && gerarSaudacao(nome)}</p>            
    </div>
  )
}

export default Saudacao