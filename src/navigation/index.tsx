import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HistoryPage from '../pages/history';
import PayloadPage from '../pages/payload';

const Navigation = () => {
    return (
        <>
            <Routes>
                <Route path='' element={<HistoryPage />} />
                <Route path='payload' element={<PayloadPage />} />
                <Route path='history' element={<Navigate to='/' />} />
            </Routes>
        </>
       
    )
}

export default Navigation;