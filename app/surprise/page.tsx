"use client"; // This directive makes the component a Client Component

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Surprise() {
  const [timeLeft, setTimeLeft] = useState({
    days: '0 days',
    hours: '0 hours',
    minutes: '0 minutes',
    seconds: '30 seconds', // Start countdown from 30 seconds
  });

  const [isCountdownFinished, setIsCountdownFinished] = useState(false);

  useEffect(() => {
    const countdownDate = new Date().getTime() + 30 * 1000; // Set countdown for 30 seconds from now

    const formatTime = (time: number, string: string): string => {
      return time === 1 ? `${time} ${string}` : `${time} ${string}s`;
    };

    const startCountdown = () => {
      const now = new Date().getTime();
      const difference = (countdownDate - now) / 1000;

      if (difference < 1) {
        setIsCountdownFinished(true);
        clearInterval(timerInterval);
      } else {
        let days = Math.floor(difference / (60 * 60 * 24));
        let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
        let minutes = Math.floor((difference % (60 * 60)) / 60);
        let seconds = Math.floor(difference % 60);

        setTimeLeft({
          days: formatTime(days, "day"),
          hours: formatTime(hours, "hour"),
          minutes: formatTime(minutes, "minute"),
          seconds: formatTime(seconds, "second"),
        });
      }
    };

    const timerInterval = setInterval(startCountdown, 1000);

    // Start countdown immediately
    startCountdown();

    // Clean up the interval on component unmount
    return () => clearInterval(timerInterval);
  }, []);

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
          {!isCountdownFinished ? (
            <section id="timer" aria-live="polite">
              <p>This content will be displayed in</p>
              <div className="timer-container">
                <span id="days" role="timer">{timeLeft.days}</span>
                <span id="hours" role="timer">{timeLeft.hours}</span>
                <span id="minutes" role="timer">{timeLeft.minutes}</span>
                and
                <span id="seconds" role="timer">{timeLeft.seconds}</span>
              </div>
            </section>
          ) : (
            <section id="content" className="visible">
              <button className="unlock-location">Unlock Secret Location</button>
            </section>
          )}
        </Link>
        <Link href="/">
          <p></p>
          <button className="more-information-btn">GO BACK</button>
        </Link>
      </div>
    </div>
  );
}
