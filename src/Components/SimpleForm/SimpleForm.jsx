import React from 'react';

const SimpleForm = () => {


    const handleSubmit = e =>{
        e.preventDefault(); //to prevent from loading
        console.log(e.target.name.value);
        console.log(e.target.email.value); // e.target.'name'.value;
        console.log('form submitted');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='naam' />
                <br />
                <input type="text" name='email'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;