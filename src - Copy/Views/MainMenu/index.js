import React from 'react';
import { Link } from 'react-router-dom';

function MainMenu() {
    return (
        <div className={'main-menu'}>
            <ul className={'menu-items'}>
                <Link to='/intro'>About Us</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/coffees'>Coffees</Link>
                <Link to='/experiments'>Experiments</Link>
            </ul>
        </div>
    );
};

export default MainMenu;