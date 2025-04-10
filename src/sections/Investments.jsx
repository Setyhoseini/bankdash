import React from 'react'
import { useTranslation } from 'react-i18next'

const Investments = () => {
    const { t } = useTranslation();
  return (
    <div>{t("sidebar.Investments")}</div>
  )
}

export default Investments