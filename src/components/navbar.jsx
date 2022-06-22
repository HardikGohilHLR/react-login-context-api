// Navbar

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useLoginContext, useLoginUpdateContext } from '../context/loginContext';

const Navbar = () => {

    const _USER = useLoginContext(e => e?.username);
    const dispatch = useLoginUpdateContext();

    const navigate = useNavigate();    

    const logOutUser = () => {
        dispatch({type: 'LOGOUT', payload: {}});
        navigate('');
    }
        
    return (
        <React.Fragment>
            <nav className="navbar is-black">
                <div className="container">
                    <div className="navbar-brand">
                        <div className="navbar-item" >
                            <h2 className="subtitle has-text-white-ter">React Login Context API</h2>
                        </div>
                    </div>

                    <div className="navbar-menu">
                        <div className="navbar-end">
                            
                            {
                                _USER && !_USER?.isGuestUser ? <>
                                <div className={`navbar-item`}>
                                    <span> Hey, {_USER} </span>
                                </div>
                                
                                <div className="navbar-item">
                                    <div className="buttons">
                                        <button className="button" onClick={logOutUser}>
                                            Logout
                                        </button>
                                    </div>
                                </div> </>
                                : 
                                <div className={`navbar-item`}>Hey, Guest</div>
                            }
                            
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;
