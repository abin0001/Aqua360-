import React from 'react';
import './App.css';

function App() {
    return (
        <div className="container"> {/* Use className instead of class */}
            <h1>AQUA 360</h1>
            <img src="public/logo512.png" alt="logo" />
            <h4>"Conserve Today, Earn Tomorrow"</h4> {/* Fixed closing tag for h4 */}
            <br /> {/* Use self-closing tag for <br> */}
            <button>Let's Start <i className="fa-solid fa-arrow-right"></i> </button> {/* Use className for class attribute */}
        </div>
    );
}

export default App;
