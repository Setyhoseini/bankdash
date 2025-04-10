import React from 'react'
import SearchBar from './SearchBar'
import { Row, Col, Button } from 'react-bootstrap'
import { useContext } from 'react'
import {SideBarContext} from '../contexts/SideBarContext'
import { useTranslation } from 'react-i18next'

const Header = React.memo( () => {
const {setShow} = useContext(SideBarContext);
const { t } = useTranslation();

  return (
    <div className='d-flex flex-row align-items-center justify-content-between'>
        <div className='d-flex flex-column align-items-center justify-content-between d-sm-none w-100'>
            <Row className='justify-content-between align-items-center w-100 gx-0'>
                <Col>
                    <Button onClick={() => setShow(true)} className='g-0 m-0 p-0 align-items-center justify-content-center bg-transparent border-0 d-md-none'>
                        <img src="/assets/icons/menu.svg" className='' alt="" style={{ width: '14px', height: '18px'}} />
                    </Button>
                </Col>
                <Col className='text-center'>
                    <span className='fs-20 fw-semibold text-main-text'>Overview</span>
                </Col>
                <Col className='text-end'>
                    <img src="" alt="" className='bg-primary rounded-circle flex-shrink-0' style={{width: '35px', height: '35px'}} />
                </Col>
            </Row>
            <Row className='mt-7 w-100 g-0'>
                <Col>
                    <SearchBar/>
                </Col>
            </Row>
        </div>

        <Button onClick={() => setShow(true)} className='tablet-menu-icon g-0 m-0 p-0 align-items-center justify-content-center bg-transparent border-0'>
            <img src="/assets/icons/menu.svg" className='' alt="" style={{ width: '14px', height: '18px'}} />
        </Button>
        <span className='desktop-title fs-28 fw-semibold text-main-text'>{t("Overview")}</span>
        <div className='header-options d-sm-flex flex-row align-items-center justify-content-between' style={{width: '35%', minWidth: '420px'}}>
            <SearchBar/>
            <img src="/assets/icons/settings.svg" alt="" className='bg-searchbar rounded-circle' style={{padding: '12.5px', width: '50px', height: '50px'}} />
            <div className="bg-searchbar rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" 
            style={{ width: '50px', height: '50px' }}>
                <img src="/assets/icons/notification.svg" alt="" style={{ width: '25px', height: '25px' }} />
            </div>
            <img src="" alt="" className='bg-primary rounded-circle flex-shrink-0' style={{width: '60px', height: '60px'}} />
        </div>
    </div>
  )
});

export default Header