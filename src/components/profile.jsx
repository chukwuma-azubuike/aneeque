import { LocalActivityRounded, Star } from "@material-ui/icons";
import Lock from "@material-ui/icons/Lock";
import People from "@material-ui/icons/People";
import RecentOrders from "./recent-orders";
import { recentProducts } from "../data/data";

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
                    <Lock style={{ color: '#353D57', margin: '0 15px 0 0', padding: '10px', background: '#EEF2F8', borderRadius: '6px' }} />
                    <div style={{}} >
                        <h4 style={{ margin: '0' }} >218</h4>
                        <p style={{ margin: '0', fontSize: '12px', color: 'rgb(162, 168, 187)' }} >Products</p>
                    </div>
                </div>
                <div style={{ background: '#EEF2F8' }} ></div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <People style={{ margin: '0 15px', color: '#353D57', padding: '10px', background: '#EEF2F8', borderRadius: '6px' }} />
                    <div style={{}} >
                        <h4 style={{ margin: '0' }} >2,580</h4>
                        <p style={{ margin: '0', fontSize: '12px', color: 'rgb(162, 168, 187)' }} >Followers</p>
                    </div>
                </div>
            </div>
            <h4 style={{ margin: '20px 0 10px 0' }}>Reputation</h4>
            <div style={{ border: '2.5px solid #EEF2F8', borderRadius: '6px', padding: '10px', marginTop: '0px' }} >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <LocalActivityRounded style={{ color: '#ee9a2b', margin: '0 15px 0 0', padding: '10px', background: 'rgb(250, 244, 241)', borderRadius: '6px' }} />
                    <div style={{ width: '100%' }} >
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }} >
                            <h5 style={{ margin: '0' }} >Star seller</h5>
                            <h5 style={{ margin: '0' }} >85%</h5>
                        </div>
                        <div style={{ height: '4px', background: '#EEF2F8', borderRadius: '8px', width: '100%', marginTop: '5px' }} >
                            <div style={{ backgroundColor: '#ee9a2b', width: '85%', borderRadius: '24px', height: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ margin: '20px 0 10px 0', display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                <h4 >Recent Orders</h4>
                <h4 style={{ color: '#4B66B1' }}>See all</h4>
            </div>
            <div style={{ border: '2.5px solid #EEF2F8', borderRadius: '6px', padding: '10px 10px 0', marginTop: '0px' }} >
                {recentProducts.map(product =>
                    <RecentOrders photo={product.photo} name={product.brand} price={product.price} time={product.time} />
                )}
            </div>
        </div>
    )
}

export default Profile;