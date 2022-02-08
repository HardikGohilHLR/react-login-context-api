import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useLoginContext } from '../context/loginContext';

const Navbar = () => {

    const { user, logOut } = useLoginContext();
    const navigate = useNavigate();

    const logOutUser = () => {
        logOut();
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
                                !user?.isGuestUser ? <>
                                <div className={`navbar-item`}>
                                    <span> Hey, {user?.username} </span>
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
