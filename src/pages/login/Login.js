import style from "./Login.module.css"
import React, { useState } from "react"

function Login() {

    let [authMode, setAuthMode] = useState("signin")

    const changeSignUp = () => {
      setAuthMode("signup")
    }

    const changeSignin = () => {
      setAuthMode("signin")
    }

    const changePassword = () => {
      setAuthMode("recoverPassword")
    }
  
    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
              <form className="Auth-form">
                <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Entrar</h3>
                  <div className="form-group mt-3">
                    <label>Usuário </label>
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
                      Entrar
                    </button>
                  </div>
                  <p className="mt-2 d-flex justify-content-between">
                    <a href="#/" className={style.hyperlinkCard}  onClick={changeSignUp}> Registre-se</a>
                    <a href="#/" className={style.hyperlinkCard} onClick={changePassword}>Esqueceu a senha?</a>                 
                  </p>
                </div>
              </form>
            </div>
          )   
    }

    if (authMode === "signup") {    
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
                <a href="#/" className={style.hyperlinkCard}  onClick={changeSignin}> Login</a>
                <a href="#/" className={style.hyperlinkCard} onClick={changePassword}>Esqueceu a senha?</a>                 
              </p>
            </div>
          </form>
        </div>
      )
    }

    if (authMode === "recoverPassword") {    
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
                  <a href="#/" className={style.hyperlinkCard}  onClick={changeSignin}> Login</a>
                  <a href="#/" className={style.hyperlinkCard}  onClick={changeSignUp}> Registre-se</a>
                </p>
              </div>
            </form>
          </div>
        )
      }
      
}

export default Login 