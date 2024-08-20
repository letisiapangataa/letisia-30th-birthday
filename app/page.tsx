import React from 'react';
import Link from 'next/link'; // Ensure Link is imported correctly
import Image from 'next/image';

export default function Home() {
  return (

    <div className="home">
      <div className="home-content">
        <p className='bday-logo-main'></p>
        <Image src="/assets/letisia_dirty_thirty_logo.png" alt='Letisia Dirty Thirty' width={888.908} height={624.91}/>

        <p className="bday-txt">In clicking <b>"Accept Invitation"</b> you are accepting an invitation <br></br>to celebrate Letisia's 30th Birthday to a secret getaway.</p>
        
        <p></p>
        <Link href="/surprise" className='bday-link'>
        <button className='btn-main'>
          Accept Invitation
        </button>
        </Link>
        
        <Link href="https://www.youtube.com/watch?v=UqfLVDIZcP8&pp=ygUHYnllIGJ5ZQ%3D%3D" className='bday-link' target='_blank'>
        <button className='btn-main'>
         Decline Invitation
        </button>
        </Link>
      </div>
    </div>

  );
}
