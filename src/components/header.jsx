import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import DescriptionIcon from '@material-ui/icons/Description';
import LockIcon from '@material-ui/icons/Lock';
import SettingsIcon from '@material-ui/icons/Settings';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import PeopleIcon from '@material-ui/icons/People';
import PieChartRoundedIcon from '@material-ui/icons/PieChartRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import Pencil from '@material-ui/icons/BorderColor';
import LocalActivityRoundedIcon from '@material-ui/icons/LocalActivityRounded';

function Header(props) {
    return (
        <div style={{ height: '60px', width: '100%', display: 'flex' }}>
            <div style={{ width: '20%', display: 'flex', alignItems: 'center', height: '100%' }} >
                <div style={{ height: '50px', width: '50px', background: '#4B66B1', borderRadius: '50%' }} />
                <h2 style={{ color: '#4B66B1', paddingLeft: '20px' }} >Aneeque</h2>
            </div>
            <div style={{ width: '55%', padding: '0 40px' }}>
                <input placeholder='Search for products' style={{
                    width: '100%', height: '58px',
                    background: '#EEF2F8', borderRadius: '50px', border: '0'
                }} />
            </div>
            <div style={{ width: '25%', display: 'flex', padding: '0 40px', justifyContent: 'space-between' }}>
                <div style={{ height: '56px', width: '56px', borderRadius: '50%', border: '2px solid #EEF2F8' }}>
                    <NotificationsRoundedIcon />
                </div>
                <div style={{ height: '56px', width: '56px', borderRadius: '50%', border: '2px solid #EEF2F8' }} />

            </div>
        </div>
    )
}

export default Header;