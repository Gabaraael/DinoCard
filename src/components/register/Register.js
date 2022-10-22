import style from './Register.module.css'
import { useState } from "react"

function Register(){    

    const[password, setPassword] = useState("")
    const[passwordConfirm, setPasswordConfirm] = useState("")
    const[login, setLogin] = useState("")

    return (        
      <>
      <div className={style.form}>
      <h2>Login: </h2>
      <input 
      onChange={(e) => setLogin(e.target.value)}
      value={login}
      ></input>
      </div>
      <div className={style.form}>
      <h2>Password: </h2>
      <input 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      ></input>
      </div>
      <div className={style.form}>
      <h2>Confirm password: </h2>
      <input 
      value={password}
      onChange={(e) => setPasswordConfirm(e.target.value)}
      ></input>
      </div>
      </>      
    )



}
export default Register