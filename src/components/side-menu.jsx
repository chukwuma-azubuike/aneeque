import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DescriptionIcon from '@material-ui/icons/Description';
import LockIcon from '@material-ui/icons/Lock';
import SettingsIcon from '@material-ui/icons/Settings';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import PeopleIcon from '@material-ui/icons/People';

function SideMenu() {

    function handleClick(e) {
        e.preventDefault();

        let idName = e.target.id;
        let classItem = document.getElementsByClassName(idName);
        let allOtherItems = document.getElementsByClassName('nav-li');
        let allOverlayDivs = document.getElementsByClassName('nav-div-overlay');

        for (let i = 0; i < allOtherItems.length; i++) {
            allOtherItems[i].style.color = '#A2A8BB';
        }
        for (let i = 0; i < allOverlayDivs.length; i++) {
            allOverlayDivs[i].style.borderRight = 'none';
        }

        for (let i = 0; i < classItem.length; i++) {
            classItem[i].style.color = '#4B66B1';
        }
        e.target.style.borderRight = '4px solid #4B66B1';
    }

    return (
        <nav className='right-border-line' style={{ padding: '100px 0px 54px', position: 'fixed', width: '265px' }} >
            <h3>Menu</h3>
            <div style={{ color: '#A2A8BB' }} >
                <ul>
                    <a href='' onClick={handleClick} className='ov nav-li' style={{ color: '#4B66B1' }}><li className='ov nav-li'>
                        <DashboardIcon className='ov nav-li' /> <p className='ov nav-li'>Overview</p><div id='ov' className='default-item ov nav-div-overlay'></div></li></a>
                    <a href='' onClick={handleClick} className='od nav-li' style={{ color: '#A2A8BB' }}><li className='od nav-li'>
                        <DescriptionIcon className='od nav-li' /> <p className='od nav-li'>Orders</p><div id='od' className='od nav-div-overlay' ></div></li></a>
                    <a href='' onClick={handleClick} className='pr nav-li' style={{ color: '#A2A8BB' }}><li className='pr nav-li'>
                        <LockIcon className='pr nav-li' /> <p className='pr nav-li'>Products</p><div id='pr' className='pr nav-div-overlay' ></div></li></a>
                    <a href='' onClick={handleClick} className='se nav-li' style={{ color: '#A2A8BB' }}><li className='se nav-li'>
                        <SettingsIcon className='se nav-li' /> <p className='se nav-li'>Setting</p><div id='se' className='se nav-div-overlay' ></div></li></a>
                </ul>
            </div>
            <h3>Business</h3>
            <div style={{ color: '#A2A8BB' }} >
                <ul>
                    <a href='' onClick={handleClick} className='sh nav-li' style={{ color: '#A2A8BB' }}><li className='sh nav-li'>
                        <SendRoundedIcon className='sh nav-li' style={{ transform: 'rotate(-40deg)' }} /> <p className='sh nav-li'>Shipment</p><div id='sh' className='sh nav-div-overlay' ></div></li></a>
                    <a href='' onClick={handleClick} className='em nav-li' style={{ color: '#A2A8BB' }}><li className='em nav-li'>
                        <PeopleIcon className='em nav-li' /> <p className='em nav-li'>Employee</p><div id='em' className='em nav-div-overlay' ></div></li></a>
                </ul>
            </div>
            <div style={{ position: 'relative', bottom: '-70px' }} >
                <p>© Aneeque {(new Date()).getFullYear()}</p>
                <p style={{ fontSize: 'smaller', fontWeight: '400', color: '#A2A8BB' }} >Platform for solutions of all types
                    <br />    of business to be more advanced.</p>
            </div>
        </nav>
    )
}

export default SideMenu;