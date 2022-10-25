import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Skillcrush/Header/Header';
import Footer from '../Skillcrush/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;