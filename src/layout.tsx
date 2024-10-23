import React from 'react';
import './style/style.css';
import { Outlet } from 'react-router-dom';  
import { Header } from './components/layout/header';
import { Footer } from './components/layout/footer';

export function Layout() {
    return (
        <div className="layout">
            <Header />

            <div className='content'>
                <Outlet></Outlet>
            </div>

            <Footer />
        </div>
    );
}