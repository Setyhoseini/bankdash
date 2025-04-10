import React from 'react'
import Transaction from './Transaction'
import { useTranslation } from 'react-i18next'

const RecentTransaction = () => {
   const { t } = useTranslation();
  return (
    <div style={{width:'368px', height: '235px', borderRadius:'25px', gap:'10px'}} className='bg-white d-flex flex-column p-6'>
        <Transaction url="/assets/images/card-transaction.svg" title={t("Deposit from my Card")} date="28 January 2021" amount="-$850" color="red"/>
        <Transaction url="/assets/images/paypal-transaction.svg" title={t("Deposit Paypal")} date="25 January 2021" amount="+$2,500" color="green"/>
        <Transaction url="/assets/images/personal-transaction.svg" title="Jemi Wilson" date="21 January 2021" amount="+$5,400" color="green"/>
    </div>
  )
}

export default RecentTransaction