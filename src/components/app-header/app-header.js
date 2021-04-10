import React from 'react';
import './header.scss';
import {BrowserRouter as Router, Link } from 'react-router-dom';


const AppHeader = () => {

    return (
        <header className="header">
       
       
     
        <Link to ='/counter' className = "header__link">Counter</Link>

        <Link to ='/table' className = "header__link">Table</Link>
           
        </header>
    )
};



export default AppHeader;