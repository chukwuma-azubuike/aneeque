import Lock from '@material-ui/icons/Lock';
import People from '@material-ui/icons/People';
import PieChartRounded from '@material-ui/icons/PieChartRounded';
import ShoppingCartRounded from '@material-ui/icons/ShoppingCartRounded';
import React from 'react';
import IncomeExpenseChart from './income-expense-chart';
import Metrics from './metrics';
import PopularProducts from './popular-products';

function Overview() {
    return (
        <div className='right-border-line' style={{ padding: '100px 40px 0', display: 'inline-block' }} >
            <h3>Overview</h3>
            <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: 'auto auto auto auto', gridGap: '20px' }} >
                <Metrics icon={<Lock style={{ color: '#ee9a2b' }} />}
                    percent='+24%' color='rgb(26, 194, 26)'
                    amount='$27,340.00' title='Total Sales' />
                <Metrics icon={<PieChartRounded style={{ color: 'rgb(170, 9, 170)' }} />}
                    percent='-32%' color='rgb(253, 97, 97)'
                    amount='$27,340.00' title='Total Expenses' />
                <Metrics icon={<People style={{ color: 'rgb(26, 194, 26)' }} />}
                    percent='+48%' color='rgb(26, 194, 26)'
                    amount='$27,340.00' title='Total Visitors' />
                <Metrics icon={<ShoppingCartRounded style={{ color: 'rgb(252, 26, 26)' }} />}
                    percent='12%' color='rgb(253, 97, 97)'
                    amount='$27,340.00' title='Total Orders' />
            </div>
            <IncomeExpenseChart />
            <PopularProducts />
        </div>
    )
}

export default Overview;