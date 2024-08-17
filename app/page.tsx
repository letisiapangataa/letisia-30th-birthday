import React from 'react';
import Link from 'next/link'; // Ensure Link is imported correctly

export default function Home() {
  return (

    <div className="home">
      <div className="home-content">
        <p></p>
        <p><img className="bday-logo" src="https://res.cloudinary.com/louiy9obu/image/upload/v1723900366/Letisia_s_4_skaf22.png"></img></p>

        <p className="bday-txt">In clicking "Accept Invitation" you are accepting an invitation <br></br>to celebrate Letisia's 30th birthday to a secret getaway.</p>
        
        <p></p>
        <Link href="/surprise" className='bday-link'>
          Accept Invitation
        </Link>

        <p></p>
        <Link href="https://www.youtube.com/watch?v=UqfLVDIZcP8&pp=ygUHYnllIGJ5ZQ%3D%3D" className='bday-link'>
         Decline Invitation
        </Link>
      </div>
    </div>

  );
}
