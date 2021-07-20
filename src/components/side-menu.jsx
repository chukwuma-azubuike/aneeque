import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DescriptionIcon from '@material-ui/icons/Description';
import LockIcon from '@material-ui/icons/Lock';
import SettingsIcon from '@material-ui/icons/Settings';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import PeopleIcon from '@material-ui/icons/People';
import PieChartRoundedIcon from '@material-ui/icons/PieChartRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import LocalActivityRoundedIcon from '@material-ui/icons/LocalActivityRounded';
import { getAllByPlaceholderText } from '@testing-library/react';


function SideMenu() {
    return (
        <nav className='right-border-line' style={{ width: '260px', height: '100%', padding: '60px 0', display:'inline-block' }} >
            <h3>Menu</h3>
            <div style={{ color: '#A2A8BB' }} >
                <ul>
                    <li><DashboardIcon /> <p>Overview</p></li>
                    <li><DescriptionIcon /> <p>Orders</p></li>
                    <li><LockIcon /> <p>Products</p></li>
                    <li><SettingsIcon /> <p>Setting</p></li>
                </ul>
            </div>
            <h3>Business</h3>
            <div style={{ color: '#A2A8BB' }} >
                <ul>
                    <li><SendRoundedIcon style={{ transform: 'rotate(-40deg)' }} /> <p>Shipment</p></li>
                    <li><PeopleIcon /> <p>Employee</p></li>
                </ul>
            </div>
            <div style={{ position: 'relative', bottom: '-70px' }} >
                <p>© Aneeque {(new Date()).getFullYear()}</p>
                <p style={{ fontSize: 'smaller', fontWeight: '400', color:'#A2A8BB' }} >Platform for solutions of all types
                    <br />    of business to be more advanced.</p>
            </div>
        </nav>
    )
}

export default SideMenu;