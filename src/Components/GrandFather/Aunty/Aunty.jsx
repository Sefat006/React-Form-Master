import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../GrandFa/GrandFa';

const Aunty = () => {

    const [money, setMoney] = useContext(MoneyContext);

    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cousin name="Rupayda"></Cousin>
                <Cousin name="Raju"></Cousin>
            </section>
            <p>Money: {money}</p>
            <button onClick={()=> setMoney(money+1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Aunty;<h2>Aunty</h2>