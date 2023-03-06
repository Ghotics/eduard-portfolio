import React from 'react';
import './AboutMe.scss'

const AboutMe = () => {
  return (
    <div className='about-container'>
      <div className='title-picture'>
        <h2 className='title-about'> About Me </h2>
        <img className='picture' src='https://res.cloudinary.com/dxm2ww5zh/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1678107081/WhatsApp_Image_2022-07-27_at_6.43.00_PM_i98y0i.jpg' alt="profile"/>
      </div>
      <div className='about-text'>
        <p>Motivated individual, looking for challanges to help me develop not only my skills but also myself as a person moving forward.
          <br />More than 5 years of experience in customer oriented position, be it as a waiter or as a small-scale manager.
          <br />It all started back in the day with my play station 1, then 2, then my first laptop. Troubleshooting it all myself, problem-solving everything i stumbled upon, growing more and more curious about it. Finally, in early 2022 decided to move into proper software development.
          <br />Upon many suggestions and informing on the subject, I ended up joining Ironhack in the part time web development course to learn all about web development one could learn in 6 months.
          <br />Main technologies learned there were: <b>Javascript, HTML5, CSS3, NodeJS, ExpressJS, MongoDB, Mongoose, and many more. But more importantly, skills like problem-solving, adapting, and agile development.</b>
          <br />Moving into the tech world hence it has been my passion since i was a little child, started off with hardware, building my own pc and now slowly crawling my way into the software world.</p>
      </div>
    </div>
  );
};

export default AboutMe;