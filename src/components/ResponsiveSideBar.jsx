import React, { useContext, useEffect, useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import Sidebar from './Sidebar';
import { SideBarContext } from '../contexts/SideBarContext';

function ResponsiveSideBar() {
  const { show, setShow } = useContext(SideBarContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    if (windowWidth > 920) {
      setShow(false);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth, setShow]);

  return (
    <>
      <Offcanvas 
        show={show && windowWidth < 920} 
        onHide={() => setShow(false)} 
        className="offcanvas-menu bg-white p-0 w-240"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='offcanvas-menu-title'></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <Sidebar />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ResponsiveSideBar;