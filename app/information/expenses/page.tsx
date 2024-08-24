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
        EXPENSES
      </div>

      <div className="trip-info-txt-p">
        <p></p>
        The currency is quite decent and affordable for example :
        <p></p>1000 NZD = 3,420.22 BRL (25/08/24)
        <p></p>100 NZD = 342.02 BRL (25/08/24)
      </div>

      <div className="trip-info-txt-p-p">
        <p></p>
        Do use this NZD to BRL Currency Converter if needed for your planning.
        <p></p><Link href="https://wise.com/gb/currency-converter/nzd-to-brl-rate" target='_blank'>
                https://wise.com/gb/currency-converter/nzd-to-brl-rate
              </Link>
      </div>

      <div className="trip-info-txt-p-p">
        For your expenses and what your saving up for, it will likely be for:
      </div>

      <div className="trip-info-txt-p-p">
        <p></p>Shopping, Food, Drinks (Alcoholic / Non Alcoholic), Tourist Activites (Maybe), 
        <p></p>Uber (Maybe), Sanitary Needs.

      </div>

      <div className="trip-info-txt-p-p">
        According to other tourists, uber is super cheap and apple pay is widely used.
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
