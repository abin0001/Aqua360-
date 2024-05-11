import React from 'react';
import  logo from  "../../Assets/water logo.png";
import './../../App.css';

function LoginPage() {
    return(
        <div className="container">
        <h1>AQUA 360</h1>
        <img src="public/logo512.png" alt="logo" />
        <h4>"Conserve Today, Earn Tomorrow"</h4>
        <br />
        <button>Let's Start <i className="fa-solid fa-arrow-right"></i> </button>
    </div>
);
}

export default LoginPage;