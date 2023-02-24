import style from "./Login.module.css"
import React, { useState } from "react"
import { authLogin } from '../../services/authService.js';


function LoginPage() {

    let [authMode, setAuthMode] = useState("login")
    
    const [user, setUser] = useState({
      username: "",
      password: "",      
    });

    function handleAuthenticationFlow(param) {
      setAuthMode(param)
    }

    //Precisa implementar um serviço de login, e trabalhar em cima do Redux/ContextAPI do React.
    function login(e) {       
      e.preventDefault();
      authLogin(user).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      });
    }
  
    if (authMode === "login") {
        return (          
            <div className={style.authFormContainer}>
              <form className="Auth-form" onSubmit={login}>
                <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Entrar</h3>
                  <div className="form-group mt-3">
                    <label>Usuário </label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder=""
                      onChange={(e) => setUser({ ...user, username: e.target.value })}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Senha</label>
                    <input type="password" className="form-control mt-1" placeholder="" onChange={(e) => setUser({ ...user, password: e.target.value })}/>
                  </div>
                  <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                      Entrar
                    </button>
                  </div>
                  <p className="mt-2 d-flex justify-content-between">
                    <a href="#/" className={style.hyperlinkCard}  onClick={() => handleAuthenticationFlow("register")}> Registre-se</a>
                    <a href="#/" className={style.hyperlinkCard} onClick={() => handleAuthenticationFlow("forgotPassword")}>Esqueceu a senha?</a>                 
                  </p>
                </div>
              </form>
            </div>
          )   
    }

    if (authMode === "register") {    
    return (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Cadastre-se</h3>
              <div className="form-group mt-3">
                <label>Usuário </label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder=""
                />
              </div>
              <div className="form-group mt-3">
                <label>E-mail </label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder=""
                />
              </div>
              <div className="form-group mt-3">
                <label>Senha</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder=""
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                Registrar
                </button>
              </div>
              <p className="mt-2 d-flex justify-content-between">
                <a href="#/" className={style.hyperlinkCard}  onClick={() => handleAuthenticationFlow("login")}> Login</a>
                <a href="#/" className={style.hyperlinkCard} onClick={() => handleAuthenticationFlow("forgotPassword")}>Esqueceu a senha?</a>                 
              </p>
            </div>
          </form>
        </div>
      )
    }

    if (authMode === "forgotPassword") {    
      return (
          <div className="Auth-form-container">
            <form className="Auth-form">
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Recuperar conta</h3>
                <div className="form-group mt-3">
                  <label>Insira o email ou usuário  </label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    placeholder=""
                  />
                </div>                
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-primary">
                    Recuperar senha
                  </button>
                </div>
                <p className="mt-2 d-flex justify-content-between">
                  <a href="#/" className={style.hyperlinkCard}  onClick={() => handleAuthenticationFlow("login")}> Login</a>
                  <a href="#/" className={style.hyperlinkCard}  onClick={() => handleAuthenticationFlow("register")}> Registre-se</a>
                </p>
              </div>
            </form>
          </div>
        )
      }
      
}

export default LoginPage 