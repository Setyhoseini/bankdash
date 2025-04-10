import React from 'react'
import { useTranslation } from 'react-i18next'

const Services = () => {
   const { t } = useTranslation();
  return (
    <div>{t("sidebar.Services")}</div>
  )
}

export default Services