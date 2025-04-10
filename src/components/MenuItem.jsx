import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const MenuItem = (props) => {
  const location = useLocation();
  const [isSelected, setSelected] = useState(location.pathname === props.href);
  useEffect(() => {
    setSelected(location.pathname === props.href);
  }, [location, props.href]);

  return (
    <Nav.Link
      eventKey={props.eventKey}
      href={props.href}
      className={`d-flex flex-row align-items-center p-0 fs-18 fw-medium text-${isSelected ? 'custom-blue' : 'menu-item-deselected'}`}
    >
      <img src="/assets/icons/menu/selected/rectangle.svg" alt="" className={`${isSelected ? 'visible' : 'invisible'}`} />
      <img src={`/assets/icons/menu/${isSelected ? 'selected' : 'disabled'}/${props.imageName}${isSelected ? '-1' : '-2'}.svg`} className="me-7 ms-10 d-inline-block" />
      {props.text}
    </Nav.Link>
  );
};

export default MenuItem;