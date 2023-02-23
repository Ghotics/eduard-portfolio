import React from 'react';
import './QuickBar.scss'

const QuickBar = () => {
  return (
    <div className='button-container'>
		  <button className='button'>Back to Top</button>
			<button className='button'>About Me</button>
			<button className='button'>Projects</button>
			<button className='button'>Moving Forward</button>
    </div>
    );
};

export default QuickBar;