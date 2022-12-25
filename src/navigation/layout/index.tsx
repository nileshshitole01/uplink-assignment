import React from 'react';
import Navigation from '..';
import AppHeader from '../../components/appHeader';
import './style.scss';

const Layout = () => {
    return (
        <div className='container'>
            <AppHeader />
            <div className="content-view">
                <Navigation/>
            </div>
        </div>
    )
};

export default Layout;