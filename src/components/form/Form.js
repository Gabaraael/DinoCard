import style from "./Form.module.css";
import { useState } from "react";

function Register() {
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [login, setLogin] = useState();
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);
    console.log(userEmail);
  }

  return (
    <>
    <form>
      <div className={style.form}>
        <h2> E-mail</h2>
        <input
          type="enail"
          placeholder="Digite o seu e-mail..."
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className={style.form}>
        <h2>Login: </h2>
        <input onChange={(e) => setLogin(e.target.value)} value={login}></input>
      </div>
      <div className={style.form}>
        <h2>Password: </h2>
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div className={style.form}>
        <h2>Confirm password: </h2>
        <input
          value={password}
          type="password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        ></input>
      </div>
      <button type="submit" onClick={enviarEmail}>Enviar email</button>
      {userEmail && (
        <div>
          <p>O E-mail do usuário é: {userEmail}</p>
        </div>
      )}
      </form>
    </>
  );
}
export default Register;
