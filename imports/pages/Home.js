import React from 'react';
import { SideNav, SideNavItem, Button } from './Home.style';
import { NavLink } from 'react-router-dom';

const Home = (props) => (
    <div>
        <div className="navbar">
            <div className="row">
                <div className="col l3 s11">
                    <img src="/images/logostartup.png" className="logoImg"/>
                </div>
                <div className="col l2 s1">
                    <i className="material-icons hide-on-med-and-down">dehaze</i>
                    <a href="#" data-activates="slide-out" className="button-collapse">
                        <i className="material-icons hide-on-large-only">menu</i>
                    </a>
                </div>
                <div className="col l7 hide-on-med-and-down containerDiv">
                    <span className="welcomeText">welcome user</span>
                    <img src = "/images/images.jpeg" className="proImg circle"/>
                </div>
            </div>
        </div>
        
        <ul id="slide-out" className="side-nav fixed">
            <li><NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
            <li><NavLink to="/feed" activeClassName="active">Feed</NavLink></li>
        </ul>
        
    </div>
)

export default Home

