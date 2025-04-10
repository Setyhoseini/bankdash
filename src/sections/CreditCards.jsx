import React from 'react'
import { useTranslation } from 'react-i18next'

const CreditCards = () => {
    const { t } = useTranslation();
  return (
    <div>{t("sidebar.Credit Cards")}</div>
  )
}

export default CreditCards