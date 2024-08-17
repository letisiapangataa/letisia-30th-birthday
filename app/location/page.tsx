import Link from 'next/link';
import React from 'react';

export default function Location() {
  return (
    
    <div className="home-rio">

        <audio autoPlay>
          <source src="https://res.cloudinary.com/louiy9obu/video/upload/v1723896505/01-Beautiful_Radio_Edit_Ft._Pharell_Williams_Charlie_Wilson_hzu2te.mp3" type="audio/mpeg"></source>
          Your browser does not support the audio element.
        </audio>


       <video muted loop autoPlay>
        <source src="https://res.cloudinary.com/louiy9obu/video/upload/v1723896257/13326487-uhd_3840_2160_30fps_eecbrv.mp4" type="video/mp4"></source>
      </video>
      <div className="home-content">
        <h1>BRASIL</h1>
        <h1>RIO DE</h1>
        <h1>JANEIRO</h1>
        <Link href="/information">
        MORE INFORMATION
        </Link>
        <p></p>
      </div>
    </div>
  );
}
