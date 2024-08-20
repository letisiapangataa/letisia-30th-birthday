import Link from 'next/link';
import React from 'react';

export default function Information() {
  return (
    
    <div className="home-rio">
      <div className="home-content">
      <div className="bday-txt-loc">
        11th January 2025 - 18th January 2025
      </div>

        <Link href="/information">
        <button className='more-information'>TRIP INFORMATION</button>
        </Link>
      </div>
    </div>
  );
}
