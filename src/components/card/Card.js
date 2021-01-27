import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({id,url, title, subtitle,text}) => {
    return (
        <>
            <div className='card'>
                <div className='box'>
                    <div className='content'>
                        <h2>{id}</h2>
                        <h3>{subtitle}</h3>
                        <p>{title}<br/><br/>{text.substring(0,150)}.....</p>
                        <NavLink to={url} className='btn btn-primary'>Ir al problema</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;