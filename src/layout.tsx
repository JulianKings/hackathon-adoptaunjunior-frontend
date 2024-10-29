import React, { useEffect } from 'react';
import './style/style.css';
import { Outlet } from 'react-router-dom';  
import { Header } from './components/layout/header';
import { Footer } from './components/layout/footer';
import { getSession } from './session/sessionManager';
import { useDispatch } from 'react-redux';
import { setSession } from './redux/slices/session';
import { useLocalStorage } from '@uidotdev/usehooks';
import { LocalStorageLoginInformation } from './interfaces/session';

export function Layout() {
    const dispatch = useDispatch();
    const [ssoToken] = useLocalStorage<LocalStorageLoginInformation>('sso_token');


    useEffect(() => {
        const fetchSession = async(dispatch) => {
            const session = await getSession(ssoToken);
            dispatch(setSession(session));
        }
        fetchSession(dispatch);
    }, [ssoToken])

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