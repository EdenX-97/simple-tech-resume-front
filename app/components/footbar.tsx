'use client'

import * as React from 'react';
import Link from 'next/link';

function Footbar() {
  return (
    <footer className="footer footer-center p-5 bg-neutral text-neutral-content rounded h-[15vh]">
      <nav className="grid grid-flow-col gap-4 text-lg">
        {/* <a className="link link-hover ">About us</a> */}
        <Link href="/contact">Contact</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-service">Terms of Service</Link>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by Eden Xu</p>
      </aside>
    </footer>
  );
}

export default Footbar;
