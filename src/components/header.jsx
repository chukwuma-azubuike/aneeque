import React from 'react'
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import Pencil from '@material-ui/icons/BorderColor';

function Header(props) {
    return (
        <div style={{ height: '60px', width: '1464px', display: 'flex', position:'absolute' }}>
            <div style={{ width: '20%', display: 'flex', alignItems: 'center', height: '100%' }} >
                <div style={{ height: '50px', width: '50px', background: '#4B66B1', borderRadius: '50%' }} />
                <h2 style={{ color: '#4B66B1', paddingLeft: '20px' }} >Aneeque</h2>
            </div>
            <div style={{ width: '55%', padding: '0 40px' }}>
                <input placeholder='Search for products' style={{
                    width: '90%', height: '58px',
                    background: '#EEF2F8', borderRadius: '50px', border: '0'
                }} />
            </div>
            <div style={{ width: '24%', display: 'flex', padding: '0 0 0 40px', justifyContent: 'space-between' }}>
                <div style={{
                    height: '56px', width: '56px', display: 'flex', justifyContent: 'space-around',
                    borderRadius: '50%', border: '2px solid #EEF2F8', alignItems: 'center'
                }}>
                    <NotificationsRoundedIcon style={{ color: '#353D57' }} />
                </div>
                <div style={{
                    height: '56px', width: '56px', display: 'flex', justifyContent: 'space-around',
                    borderRadius: '50%', border: '2px solid #EEF2F8', alignItems: 'center'
                }}>
                    <Pencil style={{ color: '#353D57' }} />
                </div>
            </div>
        </div>
    )
}

export default Header;