import React, { createContext, useState } from 'react';
import Dad from '../Dad/Dad';
import Unlce from '../Unlce/Unlce';
import Aunty from '../Aunty/Aunty';
import "./GrandFa.css";
import { useAsyncError } from 'react-router-dom';

// export korte hobe tai context ta bahire kortesi
export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

const GrandFa = () => {

    const [money, setMoney] = useState(1000);
    const asset = 'diamond';
    return (
        <div className='grandpa'>
            <h2>Grand father</h2>
            <p>net Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value='gold'>
                    <section className='flex'>
                        <Dad asset={asset}></Dad>
                        <Unlce asset={asset}></Unlce>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default GrandFa;