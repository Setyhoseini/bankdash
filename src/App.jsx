import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Overview from './sections/Overview.jsx';
import Transactions from './sections/Transactions.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/custom.scss';
import Accounts from './sections/Accounts.jsx';
import Investments from './sections/Investments.jsx';
import CreditCards from './sections/CreditCards.jsx';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Loans from './sections/Loans.jsx';
import Services from './sections/Services.jsx';
import Settings from './sections/Settings.jsx';
import { Col, Row, Button } from 'react-bootstrap';
import Header from './components/Header.jsx';
import ResponsiveSideBar from './components/ResponsiveSideBar.jsx';
import {SideBarContext} from './contexts/SideBarContext'
import { useState, useEffect } from 'react';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LanguageContext } from './contexts/LanguageContext.js';
import LoginForm from './sections/LoginForm.jsx';
import { store } from './store/store.js'
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { Provider } from 'react-redux';
import { AuthContext } from './contexts/Authcontext.js';

function App() {
  const [isLoginPage, setIsLoginPage] = useState(localStorage.getItem('isAuthenticated') === 'false' || location.pathname == '/login');
  const [show, setShow] = useState(false);
  const [ready, setReady] = useState(false);
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('selectedLanguage') || 'en';
  });

  fetch(`/assets/i18n/locales/${lang}/common.json`)
  .then(res => res.json())
  .then(data => {
    i18n
      .use(initReactI18next)
      .init({
        debug: true,
        lng: lang,
        fallbackLng: 'en',
        defaultNS: 'common',
        resources: {
          en: {
            common: data
          }
        }
      });
  });

  useEffect(() => {
    const checkReady = () => {
      if (i18n.isInitialized) {
        setReady(true);
      } else {
        i18n.on('initialized', () => setReady(true));
      }
    };

    checkReady();
  }, []);
  useEffect(() => {
    localStorage.setItem('selectedLanguage', lang);
  }, [lang]);

  if (!ready) {
       return <div>Loading translations...</div>;
  }

  return (
    <Provider store={store}>
      <AuthContext.Provider value={{isLoginPage, setIsLoginPage}}>
    <SideBarContext.Provider value={{show, setShow}}>
    <Router>
      <Row className="gx-0">
        <LanguageContext.Provider value={{lang, setLang}}>
          {!isLoginPage && <ResponsiveSideBar/>}
        {!isLoginPage && <Col className="mainSidebar bg-white w-auto position-absolute top-0 start-0 border-1 border-end border-border-gray h-100">
          <Sidebar/>
        </Col>}
        </LanguageContext.Provider>
        <Col className="mainSection vh-100" style={{ 
            marginLeft: isLoginPage ? "0" : "240px", 
            width: isLoginPage ? "100%" : "calc(100% - 240px)"
          }}>
          
          {/* Header */}
          {!isLoginPage && <Row className="border-1 border-bottom border-border-gray gx-0 py-5 px-10 container-fluid w-100">
            <Header />
          </Row>}

          {/* Content */}
          <Row className={`gx-0 bg-main-section-bg ${isLoginPage ? 'vh-100' : ''}`}>
            <Routes>
              <Route path="/" element={<ProtectedRoute><Overview /></ProtectedRoute>} />
              <Route path="/transactions" element={<ProtectedRoute><Transactions /></ProtectedRoute>} />
              <Route path="/accounts" element={<ProtectedRoute><Accounts /></ProtectedRoute>} />
              <Route path="/investments" element={<ProtectedRoute><Investments /></ProtectedRoute>} />
              <Route path="/credit-cards" element={<ProtectedRoute><CreditCards /></ProtectedRoute>} />
              <Route path="/loans" element={<ProtectedRoute><Loans /></ProtectedRoute>} />
              <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
              <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
              <Route path="/login" element={<LoginForm />}/>
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </Row>
        </Col>
      </Row>
    </Router>
    </SideBarContext.Provider>
    </AuthContext.Provider>
    </Provider>
  );
}

export default App;