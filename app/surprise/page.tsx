"use client"; // This directive makes the component a Client Component

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Surprise() {
  return (
    <div className="home">
      <div className="home-content">
        <p className="bday-logo-sp">
          <Image src="/assets/unlock_the_surpise_logo.png" width={865} height={505} alt="Unlock The Surprise" />
        </p>
        <div className="bday-txt-sp">
          Thank you for accepting the invitation to celebrate my birthday!
          <br />
          Unlock the <b>secret</b> location below.
        </div>
            <Link className="bday-txt-sp" href="/location">
              <button className="unlock-location">Unlock Secret Location</button>
            </Link>
        <Link href="/">
          <p></p>
          <button className="more-information-btn">GO BACK</button>
        </Link>
      </div>
    </div>
  );
}
