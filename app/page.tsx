import React from 'react';
import Link from 'next/link'; // Ensure Link is imported correctly

export default function Home() {
  return (

    <div className="home">
      <div className="home-content">
        <p></p>
        <p><img className="bday-logo" src="https://res.cloudinary.com/louiy9obu/image/upload/v1723900366/Letisia_s_4_skaf22.png"></img></p>

        <p className="bday-txt">In clicking <b>"Accept Invitation"</b> you are accepting an invitation <br></br>to celebrate Letisia's 30th Birthday to a secret getaway.</p>
        
        <p></p>
        <Link href="/surprise" className='bday-link'>
        <button className='btn-main'>
          Accept Invitation
        </button>
        </Link>
        
        <Link href="https://www.youtube.com/watch?v=UqfLVDIZcP8&pp=ygUHYnllIGJ5ZQ%3D%3D" className='bday-link'>
        <button className='btn-main'>
         Decline Invitation
        </button>
        </Link>
      </div>
    </div>

  );
}
