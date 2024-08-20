import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Location() {
  return (
    
    <div className="home-rio">

       <video loop autoPlay>
        <source src="https://res.cloudinary.com/louiy9obu/video/upload/v1723985740/RIO_Letisia_30th_Birthday-720p_qmlmqe.mp4" type="video/mp4"></source>
      </video>
      <div className="home-content">
      <p className='bday-logo-loc'>
        <Image src="/assets/location_exposed_logo.png" alt='Location Exposed :P' width={867.328} height={620.368} />
      </p>
      <div className="bday-txt-loc">
        11th January 2025 - 18th January 2025
      </div>

        <Link href="/information">
        <button className='more-information'>TRIP INFORMATION</button>
        </Link>
        <p></p>
      </div>
    </div>
  );
}
