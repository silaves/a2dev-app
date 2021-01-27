import React from 'react';
import doge from '../../assets/doge.png';

const ErrorMessage = ({dispatch,msg}) => {
    return (
        <div className='error-on'>
            <div>
                <h3>OOPS!</h3>
                <img src={doge} alt='ratas' width='120' />
                <p>{msg}</p>
                <a
                    className='btn btn-primary'
                    onClick={() => dispatch({ type: 'removeError' })}
                >
                    cerrar
                </a>
            </div>
        </div>
    )
}

export default ErrorMessage