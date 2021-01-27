import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ItemNavBar from './ItemNavBar';

// import '../../styles/navbar/navbar.scss';

const NavBar = () => {
    
    
const [showRespMenu, setShowRespMenu ] = useState(false);
    
    return (
        <>
        <header className='navbar-mxs'>
            <NavLink className='navbar-logo' to='/' >TestApp</NavLink>
            <ul className={ showRespMenu?'navbar-mxs-list show':'navbar-mxs-list'}>
                <ItemNavBar setShowRespMenu={setShowRespMenu} /> 
            </ul>
            <div
                className="nav-btn"
                onClick={ (e) => (setShowRespMenu(!showRespMenu))}
            >
                <label>
                <span></span>
                <span></span>
                <span></span>
                </label>
            </div>
        </header>


        </>
    )
}

export default NavBar;