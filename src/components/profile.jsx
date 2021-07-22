import Lock from "@material-ui/icons/Lock";
import People from "@material-ui/icons/People";

function Profile() {
    return (
        <div style={{ position: 'fixed', borderLeft: '2px solid #EEF2F8', width: '304px', right: '0', padding: '100px 40px 54px' }} >
            <div>
                <div style={{ height: '100px', width: '100px', borderRadius: '50px', background: 'rgb(75, 102, 177)', margin: 'auto' }} />
                <h3 style={{ color: 'rgb(75, 102, 177)', textAlign: 'center', marginTop: '30px' }} >Kunta Pulsa</h3>
            </div>
            <div style={{
                border: '2.5px solid #EEF2F8', borderRadius: '6px', padding: '15px',
                marginTop: '30px', display: 'grid', gridTemplateColumns: '50% 2px 50%'
            }} >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Lock style={{ color: '#353D57', margin: '0 15px 0 0' }} />
                    <div style={{}} >
                        <h4 style={{ margin: '0' }} >218</h4>
                        <p style={{ margin: '0', fontSize: '12px', color: 'rgb(162, 168, 187)' }} >Products</p>
                    </div>
                </div>
                <div style={{ background: '#EEF2F8' }} ></div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <People style={{ margin: '0 15px', color: '#353D57' }} />
                    <div style={{}} >
                        <h4 style={{ margin: '0' }} >2,580</h4>
                        <p style={{ margin: '0', fontSize: '12px', color: 'rgb(162, 168, 187)' }} >Followers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;