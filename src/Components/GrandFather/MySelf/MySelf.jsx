import React from 'react';
import Special from '../Special/Special';

const MySelf = ({asset}) => {
    return (
        <div>
            <h2>My Self</h2>
            <section>
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default MySelf;