import React from 'react';
import Link from 'next/link';


const Surprise = "/surprise"; // Example URL

function SurpriseButton({ children }: { children: React.ReactNode }) {
  return (
    <Link href={Surprise}>
      <button>
        {children}
      </button>
    </Link>
  );
}

export default SurpriseButton;
