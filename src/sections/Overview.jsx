import React from 'react'
import CreditCard from '../components/CreditCard'
import { Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import ExpenseStatistics from '../components/ExpenseStatistics'
import RecentTransaction from '../components/RecentTransaction'
import WeeklyActivity from '../components/WeeklyActivity'

const Overview = () => {
  const { t } = useTranslation();

  return (
    <div className='d-flex flex-row flex-wrap justify-content-center justify-content-md-between' style={{gap:'28px', padding: '3% 5%'}}>
      <div className='cards mb-9' style={{width: '730px'}} >
        <div style={{width: '730px', minWidth: '730px'}}>
          <Row className='fw-semibold text-section-title mx-0 mb-5'>
            <Col className='p-0'><span className='fs-22 p-0'>{t('My Cards')}</span></Col>
            <Col className='text-end align-self-center'><span className='fs-17 p-0'>{t('See All')}</span></Col>
          </Row>
          <Row>
            <CreditCard isSelected='true'/>
            <CreditCard isSelected='false'/>
          </Row>
        </div>
      </div>
      <div style={{width:'368px', height:'282px', gap:'20px'}} className='fs-22 p-0 fw-semibold text-section-title d-flex flex-column mb-9'>
        <Row className='mx-0'>{t("Recent Transaction")}</Row>
        <Row className='mx-0'><RecentTransaction /></Row>
      </div>
      <div style={{width:'350px', height:'367px', gap:'18px'}} className='fs-22 p-0 fw-semibold text-section-title d-flex flex-column mb-9'>
        <Row className='mx-0'>{t("Expense Statistics")}</Row>
        <Row className='mx-0'><ExpenseStatistics /></Row>
      </div>
      <div style={{width:'730px', height:'367px', gap:'18px'}} className='fs-22 p-0 fw-semibold text-section-title d-flex flex-column mb-9 overflow-x-auto'>
        <Row className='mx-0'>{t("Weekly Activity")}</Row>
        <Row className='mx-0'><WeeklyActivity /></Row>
      </div>
    </div>
  )
}

export default Overview