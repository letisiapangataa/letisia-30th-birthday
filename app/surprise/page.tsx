import Link from 'next/link';
import React from 'react';

export default function Surprise() {
  return (
    
    <div className="home">
      <div className="home-content">
      <img className="bday-logo-sp" src="https://res.cloudinary.com/louiy9obu/image/upload/v1723937574/Letisia_s_7_xwcylg.png"></img>
      <div className="bday-txt-sp">Thank you for accepting the invitation to celebrate my birthday!<br></br>Unlock the <b>secret</b> location below. </div>
      <Link className="bday-txt-sp" href="/location">
            <button className='unlock-location'>
              Unlock Secret Location
            </button>
      </Link>
      </div>
    </div>
  );
}
