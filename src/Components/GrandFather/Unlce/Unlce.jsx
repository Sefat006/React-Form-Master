import React from 'react';
import Cousin from '../Cousin/Cousin';

const Unlce = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className='flex'>
                <Cousin asset={asset} name={'momshad'}></Cousin>
                <Cousin name={'rubaiya'}></Cousin>
            </section>
        </div>
    );
};

export default Unlce;