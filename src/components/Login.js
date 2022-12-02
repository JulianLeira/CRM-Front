import '../css/Login.css';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
function Login() {
    const nav=useNavigate();
    const [inpEmail, setInputEmail]=useState("");
    const [inpPass,setInputPass]=useState("");
    const email="solera@solera.com";
    const pass="bootcamp4";
    function validateLogin(){
        if(inpEmail===email&&inpPass===pass){
            nav("/paginaPrincipal");
        }else{
          alert("El email o contraseña son incorrectos");
        }         
    }

  return (
    <form className="Login" onSubmit={validateLogin} id="loginform" >
            <h2>Login!</h2>
              <ul>
                <li>
                  <label className='signlabel' for="email">Email*</label><br></br>
                  <input  value={inpEmail} onChange={e =>setInputEmail(e.target.value)} className='signinput' placeholder='Email*' type="text" id="email" required/>
                </li>
                <br></br>
                <li>
                  <label className='signlabel' for="password">Password*</label><br></br>
                  <input value={inpPass} onChange={e =>setInputPass(e.target.value)} className='signinput' placeholder='Password*' type="password" id="password" required/>
                </li>
                <br></br>
                <br></br>
                <br></br>
                <button id='login' className='signbutton' type="submit">LOG IN</button>
              </ul>
          </form>
  );
}
export default Login;