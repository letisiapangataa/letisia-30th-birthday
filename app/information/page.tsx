import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Information() {
  return (
    
    <div className="trip-information">
      <div className="home-content">
      <p className='info-logo'>
      <Link href="/location">
      <Image src="/assets/trip_deets_logo.png" alt='Trip Information' width={800} height={545} />
      </Link>
      </p>
      <div className="trip-info-txt">
        DATES : 11th January 2025 - 18th January 2025
        <p></p>
      </div>

      <div className="trip-info-txt-p">
        <p></p>
        Thank you for joining my 30th celebration ladies!
      </div>

      <div className="trip-info-txt-p-p">
        My end goal is really for all of us to enjoy ourselves before life whisks us away into a new era.
        <p></p>Let's make this trip an <b>unforgettable</b> one, while prioritising our safety and being responsible along the way.
      </div>

        <Link href="/information/flights">
        <button className='trip-info-btn'>FLIGHTS</button>
        </Link>
        <Link href="/information/accommodation">
        <button className='trip-info-btn'>ACCOMMODATION</button>
        </Link>
        <Link href="/information/itinerary">
        <button className='trip-info-btn'>ITINERARY</button>
        </Link>
        <Link href="/information/expenses">
        <button className='trip-info-btn'>EXPENSES</button>
        </Link>
        <Link href="/information/safety">
        <button className='trip-info-btn'>SAFETY</button>
        </Link>
        <Link href="/information/preparation">
        <button className='trip-info-btn'>PREPARATION</button>
        </Link>
        
      </div>
    </div>
  );
}
