import React from 'react';
import '../styles/MainPage.css';
import Header from './Header';
import videoSrc from '../source/landing-page-ukuibo-1.mp4'; // Import the video file

const MainPage = () => {
  return (
    <div className='main-page-container'>
      <div className='video-background'>
        <video autoPlay muted loop id="myVideo">
          <source src={videoSrc} type="video/mp4" /> {/* Use the imported video */}
          Your browser does not support HTML5 video.
        </video>
      </div>
      <Header />
      <div className='content-wrapper'>
        <div className='content'>
          <h6>ONE-STOP SERVICE </h6>
          <h1>Learn Chinese, Source Products<br/>Find Love</h1>
          <h5>and many more...</h5>
        </div>
      </div>
      <footer className='footer'>
        
      </footer>
    </div>
  );
};

export default MainPage;
