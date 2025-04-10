import React from 'react'
import { AgCharts } from 'ag-charts-react'
import { useState } from 'react';
import { useSelector } from 'react-redux';

const ExpenseStatistics = () => {
    const { expenseStatistics } = useSelector(
        state => state.user.currentUser || {}
      );
    const [chartOptions] = useState({
        data:expenseStatistics,
        series: [
            {
                type: 'pie',
                angleKey: 'amount',
                radiusKey: 'number',
                sectorLabelKey: 'amount',
                sectorLabel: {
                    enabled: true,
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 8,
                    formatter: ({ datum }) => {
                        return `${datum.amount}%\n${datum.category}`;
                    },
                },
                strokeWidth: 4,
                strokes: ['white'],
                fills: [
                    '#FC7900',
                    '#1814F3',
                    '#FA00FF',
                    '#343C6A'
                ],
              
            },
        ],
    });

  return (
    <div style={{width: '350px', height: '322px', borderRadius: '25px'}} className='bg-white fs-10 fw-semibold d-flex justify-content-center'>
        <AgCharts options={chartOptions} className='align-self-center' />
    </div>
  )
}

export default ExpenseStatistics