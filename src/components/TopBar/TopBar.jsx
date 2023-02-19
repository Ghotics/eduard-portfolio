import React from 'react';
import ContactBar from './ContactBar/ContactBar';
import QuickBar from './QuickBar/QuickBar';
import './TopBar.scss'

const TopBar = () => {
  return (
    <div className='topbar'>
      <div className='quick-container'>
        <QuickBar />
      </div>
      <div className='contact-container'>
        <ContactBar />
      </div>
    </div>
  );
};

export default TopBar;