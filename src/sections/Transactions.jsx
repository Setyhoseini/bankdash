import React from 'react'
import { useTranslation } from 'react-i18next'

const Transactions = () => {
   const { t } = useTranslation();
  return (
    <div>{t("sidebar.Transactions")}</div>
  )
}

export default Transactions