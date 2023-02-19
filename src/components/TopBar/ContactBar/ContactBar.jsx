import React from 'react';
import { GoMarkGithub } from 'react-icons/go'
import { MdMail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
import './ContactBar.scss'

const ContactBar = () => {
  return (
    <div className='contact-icons'>
			<MdMail className='icon'/>
      <GoMarkGithub className='icon'/>
			<FaLinkedin className='icon'/>
    </div>
  );
};

export default ContactBar;