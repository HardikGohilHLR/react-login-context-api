// Home
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLoginContext } from '../../context/loginContext';

const Home = () => {

    const navigate = useNavigate();

    const _USER = useLoginContext(e => e?.username);

    useEffect(() => {

        if(!_USER) navigate('/');

    }, [_USER]);    

    return (
        <React.Fragment>
            <div className="container">
                <div className="mt-6">
                    <h1 className="title">Hello, Welcome to React context, <strong className="has-text-weight-bold">{_USER}</strong></h1>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;
