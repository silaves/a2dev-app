import React from 'react';

const Footer = () => {
    return (
        <>
        <footer>
            <div className='container-footer'>
                <div className='about'>
                    <h2 className='footer-title'>Acerca de</h2>
                    <p>Paolo Anghelo Nieto Aldana, Ingeniero Informático, Desarrollador Web Junior, Bolivia</p>
                </div>
                <div className='contact'>
                    <h2 className='footer-title'>Contacto</h2>
                    <ul className='contact-list'>
                        <li>
                            <span><i className="fas fa-map-marker-alt"></i></span>
                            <span>Tarija, Cercado</span>
                        </li>
                        <li>
                            <span><i className="fas fa-phone"></i></span>
                            <span>+591 76193025</span>
                        </li>
                        <li>
                            <span><i className="fas fa-envelope"></i></span>
                            <span>paolomxs@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        <div className='copyright'>Copyright © 2021 Paolo Anghelo Nieto Aldana</div>
        </>
    )
}

export default Footer;