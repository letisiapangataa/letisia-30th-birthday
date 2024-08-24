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
        SAFETY
      </div>

      <div className="trip-info-txt-p">
        <p></p>
        Safety is <b>critically important</b> and is a number one priority and a shared responsibility amongst us.
      </div>

      <div className="trip-info-txt-p-p">
        Our trip can be super fun, however as always, having common sense and remaining street smart 
        <p></p>will keep us safe from being taken advantaged of or anything further than that.
      </div>

      <div className="trip-info-txt-p-p">
        We are tourists, and there is a distinct wealth gap between rich and poor in the area. 
        <p></p>However, the poor areas can be widely misunderstood as they try to survive.
      </div>

      
      <div className="trip-info-txt-p-p">
        <p></p>For general notice, just keep your common sense when you're in a new place 
        <p></p>with people you don't know.
      </div>

      <div className="trip-info-txt-p-p">
        1. Hide your valuables, such as your phone when in public. Be careful holding it out or taking a photo
        <p></p>As sometimes a local will snatch your phone off you and run.
      </div>

      <div className="trip-info-txt-p-p">
        2. Always watch your things when out and about. It is said, vendors or street marketers 
        <p></p>will try to overwhelm you and sell their goods, while they take your belongings. 
        <p></p>Be smart, pack little when out and always watch your stuff when relaxing.
      </div>

      <div className="trip-info-txt-p-p">
        3. Guard your drinks or liquids, choose a can or bottle, watch when your drink is being made
        <p></p>especially when purchasing a drink at a street vendor.
      </div>

      <div className="trip-info-txt-p-p">
        4. Get a cross body bag or a small bag you can put in front of you to pack your things when
        <p></p>out and about, so you're always watching your bag from potential pickpocketers.
      </div>

      <div className="trip-info-txt-p-p">
        I will post more if needed, otherwise feel free to research more tips and share via IG chat.
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
