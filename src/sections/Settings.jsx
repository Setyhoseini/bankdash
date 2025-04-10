import React from 'react'
import { useTranslation } from 'react-i18next'

const Settings = () => {
   const { t } = useTranslation();
  return (
    <div>{t("sidebar.Settings")}</div>
  )
}

export default Settings