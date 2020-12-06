import React from 'react';
import './App.css';
import logo from './logo.svg';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import axios from 'axios';

function App()
{      
    //render()     
    const openMenu =() => {
        document.querySelector(".sidebar").classList.add("open");    
    }
    const closeMenu =() => {
        document.querySelector(".sidebar").classList.remove("open");  
    }

    return (             
        <div className = "grid-container">          
       <form onSubmit={(e) => login(e)}>
        
           <div className="logoLabel">
                <img src={logo} className = 'App-logo' alt='logo'/> 
                <label htmlFor="LogoText" className="logoLabel" > Space Platform </label>

                <h1>Before validating your email, thanks to enter your user email and password</h1>
           </div>              
                <div className="form-group">
                    <label htmlFor="InputEmail" className="labelContainer">Email address</label>
                    <input type="email" className="form-control" rows="3" id="InputEmail" aria-describedby="emailHelp"/>            
                </div>

                <div className="form-group">
                    <label htmlFor="InputPassword" className="labelContainer">Password</label>
                    <input type="password" className="form-control" id="InputPassword"/>
                </div>        

                <div className="findpassbtn">                    
                    <a href="findpass.html" className="findpassbtn" id="FindPassBtn">Forget Password ?</a>            
                </div> 
                <button type="submit" className="button button4">Submit</button>      
                </form>

                <div className="registerbtnContainer">
                    <label htmlFor="RegisterBtn" className="labelContainer">Don't have an account yet?</label>
                    <a href="register.html" className="registerbtn" id="RegisterBtn">Register</a>
                </div>      

                 <div className="ETCBtns">                    
                    <a href="FrontLink.html" className="frontlinkbtn">Go Webpage</a>
                    <a href="ShoppingMall.html" className="mallbtn">Go Mall</a>
                </div>                                 

                <footer className="footer">
                    Copyrights 2020 @ Spaceplatform All Rights reserved.
                </footer>   
            
        </div> 
    );    
}

function login(e) {
    e.preventDefault();
    let request = {
        email: document.getElementById('InputEmail').value,
        password: document.getElementById('InputPassword').value        
    }
    axios.post('http://localhost:3000/login', request)
    .then( resp => {
        alert(resp.data.message);
    })
    .catch(err => {
        console.log(err);
    })
}


export default App;