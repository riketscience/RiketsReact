import React from 'react'

export default function CoffeeItem(props) {
    return (
        <div className={'coffee-item'}>
            <h3>{props.product.name}</h3>
            <img style={{borderStyle:'double', borderWidth: '3px'}} src='http://lorempixel.com/200/150/food/'/>
            <div>({props.product.origin})</div>
            <div className={'strength-stars'}>strength:
                <div>
                    {[1,2,3,4,5].map((i) => { return <span className={"star " + (i <= props.product.strength ? 'active' : '')}>✪</span>})}
                </div>
            </div>
        </div>
    );
};