// Login

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLoginUpdateContext } from '../../context/loginContext';

const Login = () => {

    const navigate = useNavigate();
    
    const dispatch = useLoginUpdateContext();
    
    const [allValues, setAllValues] = useState({
        username: '',
        password: ''
    });

    const handle = {
        change: (e) => {
            const { name, value } = e.target;
            setAllValues({...allValues, [name]: value});
        },
        submit: (e) => {
            e.preventDefault();
            if(allValues?.username !== '' && allValues?.password !== '') {
                dispatch({type: 'LOGIN', payload: allValues});
                navigate('home');
            }
        }
    }

    return (
        <React.Fragment>
            <div className="container mt-6">

                <div className="column is-5 is-offset-one-quarter">
                    <form>
                        <div className="control mb-4">
                            <label className="title is-6 mb-1 is-block">Email or Username: </label>
                            <input type="text" className="input is-hovered" name="username" value={allValues?.username} onChange={handle.change} placeholder="Username" />
                        </div>

                        <div className="control">
                            <label className="title is-6 mb-1 is-block">Password: </label>
                            <input type="password" className="input is-hovered" name="password" value={allValues?.password} onChange={handle.change} placeholder="1234" />
                        </div>

                        <button className="button is-link mt-4" onClick={handle.submit}>Login</button>
                    </form>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;
