import React, { useState } from 'react';

const StatefulForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6 ){
            setError('password must be of 6 digits')
        }
        else{
            setError('');
            console.log(email, password, name); // setEmail e onno shob deya hoyeche
        }
        
    }

    const handleNameChange = e =>{
        console.log(e.target.value);
        setName(e.target.value);
    }

    const handleEmailChange = e =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
        console.log(e.target.value);
        setPassword(e.target.value);
    }



    return (
        <div>
            <form onClick={handleSubmit}>
                <input onChange={handleNameChange} type="text" name='name'/>
                <br />
                <input onChange={handleEmailChange} type="email" name='email' />
                <br />
                <input onChange={handlePasswordChange} type="password" name='password' required />
                <br />
                <input type="submit" value="submit"/>
                <br />
                {
                    error && <p><strong>{error}</strong></p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;