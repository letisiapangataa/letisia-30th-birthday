"use client"; // This directive makes the component a Client Component

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Surprise() {
  const [secondsLeft, setSecondsLeft] = useState(30); // Start countdown from 30 seconds
  const [isCountdownFinished, setIsCountdownFinished] = useState(false);

  useEffect(() => {
    const countdownDate = new Date().getTime() + 30 * 1000; // Set countdown for 30 seconds from now

    const startCountdown = () => {
      const now = new Date().getTime();
      const difference = Math.floor((countdownDate - now) / 1000);

      if (difference <= 0) {
        setIsCountdownFinished(true);
        clearInterval(timerInterval);
      } else {
        setSecondsLeft(difference);
      }
    };

    const timerInterval = setInterval(startCountdown, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timerInterval);
  }, []);

  const formatTime = (time: number, unit: string): string => {
    return time === 1 ? `${time} ${unit}` : `${time} ${unit}s`;
  };

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
        {!isCountdownFinished ? (
          <div className="bday-txt-sp">
            <span id="seconds" role="timer">
              Loading in {formatTime(secondsLeft, "second")}
            </span>
          </div>
        ) : (
          <section id="content" className="visible">
            <Link className="bday-txt-sp" href="/location">
              <button className="unlock-location">Unlock Secret Location</button>
            </Link>
          </section>
        )}
        <Link href="/">
          <p></p>
          <button className="more-information-btn">GO BACK</button>
        </Link>
      </div>
    </div>
  );
}
