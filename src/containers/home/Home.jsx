import React from 'react';
import './home.scss'
import {Header, Posts} from '../../components'

const Home = () => {
    return (
        <>
            <Header />
            <div className="home container">
                <Posts />
            </div>
        </>
    );
};

export default Home;