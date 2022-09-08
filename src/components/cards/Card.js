import style from './Card.module.css'

function Card({url}){
  
  return(
  <>
        <img className={style.image} src={url} alt="Avatar"/>
        <div className={style.container}>
        <h4><b>John Doe</b></h4>
        <p>Architect and Engineer</p>
        </div>
</>
)
    
}
export default Card