

function PopularProducts() {
    return (
        <div style={{ border: '2.5px solid #EEF2F8', borderRadius: '6px', padding: '15px', marginTop: '30px' }} >
            <div style={{ fontWeight: '600', fontSize: '18px' }} >
                <p style={{ margin: '0' }} >Popular Products</p>
            </div>
            <div style={{
                background: '#EEF2F8', margin: '15px 0', padding: '10px 20px', fontSize: '14px', fontWeight: '600',
                borderRadius: '4px', display: 'grid', gridTemplateColumns: '12% 18% 20% 15% 11% 11% 13%', color:'rgb(162, 168, 187)'
            }} >
                <span>Photos</span>
                <span>Name</span>
                <span>Date</span>
                <span>Category</span>
                <span>Brand</span>
                <span>Price</span>
                <span>Status</span>
            </div>
        </div>
    )
}

export default PopularProducts;