import Link from 'next/link';
import React from 'react';

export default function Surprise() {
  return (
    
    <div className="home">
      <video muted loop autoPlay>
        <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4"></source>
      </video>
      <div className="home-content">
        <h1>You Accepted!</h1>
        <p>We are going to ...</p>
        <Link href="/location">
            <button>
              Unlock Surprise
            </button>
        </Link>
      </div>
    </div>
  );
}
