import React from 'react'
import { useTranslation } from 'react-i18next'

const Loans = () => {
   const { t } = useTranslation();
  return (
    <div>{t("sidebar.Loans")}</div>
  )
}

export default Loans