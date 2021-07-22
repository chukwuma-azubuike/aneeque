function Products(props) {
    return (
        <div style={{
            margin: '15px 0', fontSize: '12px', fontWeight: '600',
            display: 'grid', gridTemplateColumns: '12% 18% 20% 15% 11% 11% 13%', color: 'black'
        }} >
            <img style={{ width: '40px' }} src={props.photo} />
            <div>
                <p style={{ margin: '0 0 5px 0' }} >{props.name}</p>
                <p style={{ fontSize: '9px', color: '#A2A8BB', margin: '0' }} >{props.productNumber}</p>
            </div>
            <span>{props.date}</span>
            <span>{props.category}</span>
            <span>{props.brand}</span>
            <span style={{ color: 'rgb(26, 194, 26)' }} >{props.price}</span>
            <div>
                <p style={{ margin: '0 0 5px 0' }} >{props.status}</p>
                <p style={{ fontSize: '9px', color: '#A2A8BB', margin: '0' }} >{props.viewers} viewers</p>
            </div>
        </div>
    )
}

export default Products;