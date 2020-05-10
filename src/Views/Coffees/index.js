import React from 'react';
import products from '../../Data/products'
import CoffeeItem from './CoffeeItem'

function Coffees() {
    let p = products();
    console.log(p);

    return (
        <div>
            <h3>Coffes of the month</h3>
            <div style={{display: 'flex', justifyContent: "center"}}>
            { p.map((p) => {
                return <CoffeeItem product={p} />
            })}
            </div>
        </div>
    );
};

export default Coffees;