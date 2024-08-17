import React from 'react';
import Link from 'next/link';
import Surprise from '../surprise/page';

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
