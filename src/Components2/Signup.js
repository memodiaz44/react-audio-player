import React from 'react'
import '../stylesheets.css/sign.css' 
import logo  from '../images/logo.JPG'

const Singin = () => {
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
        <input type='text' placeholder="name"/>       
        <input type='text' placeholder="email"/>   
        <input type='text' placeholder="phone"/>    
        <input type='text' placeholder="password"/>
        <button type="submit">Submmit</button>
        </div>
        </form>
    </div>
    )
}

export default Singin