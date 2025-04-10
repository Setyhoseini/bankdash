import React, { useContext } from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import MenuItem from './MenuItem'
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../contexts/LanguageContext';
import { AuthContext } from '../contexts/Authcontext';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const {lang, setLang} = useContext(LanguageContext);
  const {setIsLoginPage} = useContext(AuthContext)
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Nav className="flex-column p-0 m-0 container-fluid">
      <Navbar.Brand className='mx-10 mb-10 ms-md-8 me-md-6 mt-md-8 mb-md-13 align-self-center'><img src="/assets/images/brand.svg" /></Navbar.Brand>
      <MenuItem eventKey='overview' href='/' imageName='home' text={t('sidebar.Dashboard')} />
      <MenuItem eventKey='transactions' href='/transactions' imageName='transfer' text={t('sidebar.Transactions')} />
      <MenuItem eventKey='accounts' href='/accounts' imageName='user' text={t('sidebar.Accounts')} />
      <MenuItem eventKey='investments' href='/investments' imageName='economic-investment' text={t('sidebar.Investments')} />
      <MenuItem eventKey='credit-cards' href='/credit-cards' imageName='credit-card' text={t('sidebar.Credit Cards')} />
      <MenuItem eventKey='loans' href='/loans' imageName='loan' text={t('sidebar.Loans')} />
      <MenuItem eventKey='services' href='/services' imageName='service' text={t('sidebar.Services')} />
      <MenuItem eventKey='settings' href='/settings' imageName='settings' text={t('sidebar.Settings')} />
      <Button onClick={() => {setLang(lang == 'en' ? 'fa' : 'en')}} className='bg-transparent mt-5 w-25 align-self-center'>{`${lang == 'en' ? 'fa' : 'en'}`}</Button>
      <Button onClick={
        () => {setIsLoginPage(true);
               localStorage.setItem('isAuthenticated', 'false'),
               navigate("/login");
      }} className='bg-transparent mt-5 w-50 align-self-center'>Log out</Button>
    </Nav>
  )
}

export default Sidebar