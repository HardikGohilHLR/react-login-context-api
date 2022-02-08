import React from 'react';
import { useLoginContext } from '../../context/loginContext';

const Home = () => {

    const { user } = useLoginContext();

    return (
        <React.Fragment>
            <div className="container">
                <div className="mt-6">
                    <h1 className="title">Hello, Welcome to React context, {user?.username}</h1>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;
