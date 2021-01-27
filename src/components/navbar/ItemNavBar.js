import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import {ListLinks} from './ListLinks';

const ItemNavBar = ({setShowRespMenu}) => {

    const [marker, setMarker] = useState({top:0,width:0});
    
    return (
        <>
            <div id='marker' style={{width:marker.width+'px',top:marker.top+'px'}} ></div>
            
            { ListLinks.map( ({name,url}) => 
                
                <li key={url}>
                    <NavLink
                        onClick={()=>setShowRespMenu(false)}
                        className='nav-link'
                        activeClassName='active-link'
                        exact
                        to={url}
                        onMouseMove={ (e) => setMarker( ({
                            'top':e.target.offsetTop,
                            'width':e.target.clientWidth
                        })) }
                    >
                        {name}
                    </NavLink>
                </li>
             ) }
        </>
    )
}

export default ItemNavBar;