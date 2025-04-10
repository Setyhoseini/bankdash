import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function SearchBar() {
  const { t } = useTranslation();

  return (
    <InputGroup className="searchbar bg-searchbar py-2 px-2" style={{ minWidth: '240px', width: '50%', borderRadius: '40px' }}>
      <InputGroup.Text id="basic-addon1" className='border-0 rounded-10 pe-0' style={{borderRadius: '40px' }}>
        <img src="/assets/icons/search.svg" alt="" />
      </InputGroup.Text>
      <FormControl
        placeholder={t("Search for something")}
        aria-label="Search"
        aria-describedby="basic-addon1"
        className='border-0 bg-searchbar text-main-text fs-15 fw-normal flex-grow-0 shadow-none'
        style={{width: '85%'}}
      />
    </InputGroup>
  );
}

export default SearchBar;