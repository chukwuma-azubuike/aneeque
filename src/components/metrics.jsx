import React from 'react';
import CountUp from 'react-countup';

function Metrics(props) {
    return (
        <div style={{ border: '2.5px solid #EEF2F8', borderRadius: '6px', padding: '15px' }} >
            <div className='home-font' >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                    <span>{props.icon}</span>
                    <span style={{ color: props.color, fontSize: '14px', fontWeight: '600' }} >{props.percent}</span>
                </div>
                <h3 style={{ margin: '10px auto' }} >
                    <CountUp end={props.amount} duraction={7} separator=',' decimal='.' prefix='$' decimals={2} />
                </h3>
                <p style={{ color: '#A2A8BB', fontWeight: '500', fontSize: '15px', margin: '0' }}>{props.title}</p>
            </div>
        </div>
    )
}

export default Metrics;