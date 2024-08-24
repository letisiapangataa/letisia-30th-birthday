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
        ACCOMMODATION
        <p></p>
      </div>

      <div className="trip-info-txt-p">
        <p></p>
        We're going to be staying at a modern apartment in the heart of Rio De Janeiro, in front of Copacabana (Rio's Iconic Beach).
      </div>

      <div className="trip-info-txt-p-p">
        It's super modern, there's an ensuite room (i'll likely will be in that one lmao), another bedroom with a double bed,
        <p></p>and a living room open double bed couch which is also really neat. Front row to the beach.
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
