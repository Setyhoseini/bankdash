import React from 'react'
import { AgCharts } from 'ag-charts-react';
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux';

const WeeklyActivity = () => {
  const { t } = useTranslation();
  const { weeklyActivity } = useSelector(
          state => state.user.currentUser || {}
        );

const options = {
    data: weeklyActivity,
    series: [
      { type: 'bar', xKey: 'day', yKey: 'withdraw', yName: t('Withdraw'), cornerRadius: 20, fill: '#1814F3'},
      { type: 'bar', xKey: 'day', yKey: 'deposit', yName: t('Deposit'), cornerRadius: 20, fill: '#16DBCC'},
    ],
    theme: {
        overrides: {
          bar: {
            series: {
              grouped: {
                barWidth: 5,
                barGap: 2,
              },
            },
          },
        },
      },
  };
  return (
    <div style={{width:'730px', height: '322px', borderRadius:'25px'}} className='bg-white d-flex align-items-center justify-content-center'>
         <AgCharts options={options} className='w-100' />
    </div>
  )
}

export default WeeklyActivity