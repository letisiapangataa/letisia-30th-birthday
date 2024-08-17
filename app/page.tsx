import React from 'react';
import Link from 'next/link'; // Ensure Link is imported correctly

export default function Home() {
  return (

    <div className="home">
      <video muted loop autoPlay>
        <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4"></source>
      </video>
      <div className="home-content">
        <h2>You're Invited!</h2>

        <p>In clicking "Accept Invitation" you are accepting an invitation <br></br>to celebrate Letisia's 30th birthday to a secret getaway.</p>
        
        <p></p>
        <Link href="/surprise">
          Accept Invitation
        </Link>

        <p></p>
        <Link href="https://www.youtube.com/watch?v=UqfLVDIZcP8&pp=ygUHYnllIGJ5ZQ%3D%3D">
         Decline Invitation
        </Link>
      </div>
    </div>

  );
}
