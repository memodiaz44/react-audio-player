import React from 'react'
import '../stylesheets.css/login.css' 
import logo  from '../images/logo.JPG'

const Login = () => {
    return(
    <div className="login-conteiner" 
    >
        <form className='log' >   
        <div>         
        <img className='img'
      src={logo}
      alt="logo"
      /></div>
      <div>     
        <div>Log in</div>    
               
        <input placeholder="enter email"/>       
        <input placeholder="password"/>
        <button type="submit">Submmit</button>
        </div>
        </form>
    </div>
    )
}

export default Login