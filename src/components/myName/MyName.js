

function MyName({setNome}) {
  
  return (
    <div>
      <p>Digite o seu nome:</p>
      <input type="text" placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)}></input>
    </div>
  )
}

export default MyName