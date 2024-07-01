import React from 'react';

const ReuseableForm = ({formTitle, submitBtnText = 'Submit'}) => {

    const handleSubmit = e =>{
        e.preventDefault();

    }
    return (
        <div>
            <h4>{formTitle}</h4>
             <form onSubmit={handleSubmit}>
                <input type="text" name='name' />
                <br />
                <input type="text" name='email'/>
                <br />
                <input type="submit" value= {submitBtnText} />
            </form>
        </div>
    );
};

export default ReuseableForm;