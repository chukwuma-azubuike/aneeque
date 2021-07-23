function RecentOrders(props) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom:'10px' }}>
            <img src={props.photo} style={{ width: '30px', marginRight: '15px' }} />
            <div style={{ width: '100%' }} >
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }} >
                    <h5 style={{ margin: '0' }} >{props.name}</h5>
                    <h5 style={{ margin: '0', color: 'rgb(26,194, 26)' }} >+{props.price}</h5>
                </div>
                <div style={{ marginTop: '5px', fontSize: '10px', color: 'rgb(162, 168, 187)' }} >
                    <p style={{ margin: '0' }}>{props.time} Minutes Ago</p>
                </div>
            </div>
        </div>
    )
}

export default RecentOrders;