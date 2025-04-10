import React from 'react'
import { useTranslation } from 'react-i18next'

const Accounts = () => {
   const { t } = useTranslation();
  return (
    <div>{t('sidebar.Accounts')}</div>
  )
}

export default Accounts