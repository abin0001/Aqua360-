import React, { useState } from 'react';
import './../../App.css';

function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        username: '',
        deviceId: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Here you can add further logic such as displaying a message or redirecting the user
        // This example simply logs the form data to the console
    };

    return (
        <div className="container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
                <input type="text" name="deviceId" value={formData.deviceId} onChange={handleChange} placeholder="Device ID" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
