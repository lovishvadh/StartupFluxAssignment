import React from 'react';
import { SideNav, SideNavItem, Button } from './Home.style';
import Home from './Home';
const Dashboard = () => (
    <div>
        <Home active="Dashboard"/>
        <div className="visibleArea">
            <h2>Welcome to StartupFlux Dashboard</h2>
        </div>
    </div>
)

export default Dashboard