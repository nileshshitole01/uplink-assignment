import React from 'react';
import { ButtonBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './style.scss';

const AppHeader = () => {
    const navigate = useNavigate();

    const handleNavigation = (route: string) => {
        navigate(route);
    };

    return(
        <div className="app-header-container">
            <div className="brand">
                LOGO
            </div>
            <div className="links-view">
                <ButtonBase className='link-item' onClick={() => handleNavigation('history')} >History</ButtonBase>
                <ButtonBase className='link-item' onClick={() => handleNavigation('payload')} >Payload</ButtonBase>
            </div>
        </div>
    )
};

export default AppHeader;