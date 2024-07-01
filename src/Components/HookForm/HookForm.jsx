import React, { useState } from 'react';
import useInputState from '../../Hooks/useInputState';

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('rojoni')

    const emailState = useInputState('rajoni@gmail.com'); //if return is used as object

    const handleSubmit = e => {
        // console.log('form data', name);
        console.log('form data', emailState.value)
        e.preventDefault();
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name='naam' /> */}

                <br />
                <input {...emailState} type="text" name='email'/>
                <br />
                <input type="password" name='password'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;