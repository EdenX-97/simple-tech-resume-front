'use client'

import * as React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Topbar() {
  const router = useRouter()

  return (
    <div className="navbar bg-base-300 h-[8vh] pl-[15vw] pr-[15vw]">
      <div className="navbar-start">
        {/* <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/">Home</Link></li>
            <li>
              <a>Tools</a>
              <ul className="p-2">
                <li><Link href="/profile">Profile2</Link></li>
                <li><Link href="/resume">Resume2</Link></li>
                <li><Link href="/interview">Interview</Link></li>
              </ul>
            </li>
            <li><Link href="/pricing">Pricing</Link></li>
          </ul>
        </div> */}
        <div className="flex items-center space-x-2 btn btn-ghost" onClick={() => router.push('/')}>
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <a className="text-xl">Simple Tech Resume</a>
        </div>
      </div>

      <div className="navbar-center flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/">Home</Link></li>
          <li>
            <details>
              <summary>Tools</summary>
              <ul className="p-2 z-[10]">
                <li><Link href="/profile">Profile</Link></li>
                <li><Link href="/resume">Resume</Link></li>
                <li><Link href="/interview">Interview</Link></li>
              </ul>
            </details>
          </li>
          <li><Link href="/pricing">Pricing</Link></li>
        </ul>
      </div>

      <div className="navbar-end">
        {/* <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-8 rounded-full">
              <AccountCircleIcon className="w-8 h-8" />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-35">
            <li><a>Logout</a></li>
          </ul>
        </div> */}
        <button className="btn btn-sm btn-neutral">Register</button>
        <button className="btn btn-sm btn-neutral ml-2">Login</button>
      </div>
    </div>
  );
}

export default Topbar;
