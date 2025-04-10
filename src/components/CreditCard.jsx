import React from 'react'
import { Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const CreditCard = (props) => {
  const { t } = useTranslation(); 

  return (
    <Col>
    <div style={{width: '350px', height: '235px', borderRadius: '25px', padding: '20px 0', background:props.isSelected == 'true' ? 'linear-gradient(107.38deg, #4C49ED 2.61%, #0A06F4 101.2%)' : 'white'}} className={`${props.isSelected == 'true' ? 'text-white' : 'text-section-title border border-1 border-border-gray'}`}>
        <div style={{padding: '0 20px'}} className='d-flex flex-row justify-content-between align-items-center container-fluid mb-8'>
            <div className='d-flex flex-column '>
                <span className='fs-12 fw-normal'>{t('Balance')}</span>
                <span className='fs-20 fw-semibold'>$5,756</span>
            </div>
            <img src={`/assets/images/chip-card${props.isSelected == 'true' ? '-1' : '-2'}.svg`} alt="" />
        </div>
        <div className='d-flex flex-row align-items-center ms-5 g-17 mb-5'>
            <div className='d-flex flex-column'>
                <span className='fs-12 fw-normal me-17'>{t('CARD HOLDER')}</span>
                <span className='fs-15 fw-semibold'>Eddy Cusuma</span>
            </div>
            <div className='d-flex flex-column'>
                <span className='fs-12 fw-normal'>{t('VALID THRU')}</span>
                <span className='fs-15 fw-semibold'>12/22</span>
            </div>
        </div>
        <div className={`px-5 d-flex justify-content-between align-items-center ${props.isSelected == 'true' ? "" :  'border-top border-1 border-border-gray'}`} style={{background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)', height: '70px'}}>
          <div className='fs-22 fw-semibold'>3778 **** **** 1234</div>
          <img src={`/assets/images/card-graphic${props.isSelected == 'true' ? '-1' : '-2'}.svg`} alt="" style={{width: '44px'}} />
        </div>
    </div>
    </Col>
  )
}

export default CreditCard