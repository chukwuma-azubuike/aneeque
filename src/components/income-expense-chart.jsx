import React from 'react';
import { Bar } from 'react-chartjs-2';

function IncomeExpenseChart(props) {

    function handleClick(e) {
        e.preventDefault();
        let colorArr = document.getElementsByClassName('color-toggle');

        for (let i = 0; i < colorArr.length; i++) {
            if (colorArr[i].style.color === 'black') {
                colorArr[i].style.color = "#A2A8BB";
            }
        }
        e.target.style.color = 'black';
    }

    const chartData = {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'],
        datasets: [{
            barPercentage: 0.5,
            barThickness: 16,
            maxBarThickness: 40,
            minBarLength: 0,
            borderRadius: 24,
            backgroundColor: '#9bc1fc',
            hoverBackgroundColor: '#4B66B1',
            clip: { left: 15, top: 15, right: 20, bottom: 20 },
            data: [4, 8, 6, 2, 7, 6, 4, 6, 4, 6, 4, 8]
        }]
    }

    const options = {
        plugins: {
            legend: {
                labels: ''
            },
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem) {
                    return tooltipItem.yLabel;
                }
            }
        },
        scales: {
            y: {
                height: 200,
                suggestedMin: 0,
                suggestedMax: 10,
                ticks: {
                    stepSize: 4,
                    format: { width: 20 }
                },
                grid: {
                    borderWidth: 0,
                    tickWidth: 0,
                },
                offset: true,
            },
            x: {
                grid: {
                    display: false,
                    offset: true
                },
                // offset: true,
            },
        }
    };

    return (
        <div style={{ border: '2.5px solid #EEF2F8', borderRadius: '6px', padding: '15px', marginTop: '30px' }} >
            <div style={{ fontWeight: '600', fontSize: '18px' }} >
                <a href='' ><span className='color-toggle' onClick={handleClick} style={{ margin: '0 20px 0 0', color: 'black' }} >Income</span></a>
                <a href=''><span className='color-toggle' onClick={handleClick} style={{ color: '#A2A8BB' }}>Expense</span></a>
            </div>
            <Bar data={chartData}
                options={{ maintainAspectRatio: true }}
                options={options} height={80}
            />
        </div>
    )
}

export default IncomeExpenseChart;