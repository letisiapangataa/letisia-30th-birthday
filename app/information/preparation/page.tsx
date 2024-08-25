import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Information() {
  return (
    
    <div className="trip-information">
      <div className="home-content">
      <p className='info-logo'>
      <Link href="/information">
      <Image src="/assets/trip_deets_logo.png" alt='Trip Information' width={800} height={545} />
      </Link>
      </p>
      <div className="trip-info-txt">
        PREPARATION
      </div>

      <div className="trip-info-txt-p">
        <p></p>
        Prepare your savings for your expenses, apply for leave once flight dates are confirmed, 
        <p></p>and start learning Portuguese, this is the main language in Brasil.
      </div>

      <div className="trip-info-txt-p-p">
        <p></p>
        As well as that, prepare your cute fits, get your bathing suits, make up, dresses as well as prioritise
        <p></p>packing light because we may visit the markets right across our place.
      </div>

      <div className="trip-info-txt-p-p">
        <p></p>
        Prepare the family in your own time, as they may have their own concerns regarding Rio De Janeiro.
        <p></p>Learn the history and culture of Rio de Janeiro, Brasil.
      </div>

      <div className="trip-info-txt-p-p">
        <p></p>
        Watch YouTube videos of girl trips in Rio to get you more comfortable. I probably have watched all of it by now.
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
