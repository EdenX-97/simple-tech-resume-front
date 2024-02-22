'use client'
import * as React from 'react';
import Footbar from '../components/footbar';

export default function Contact() {
  return (
    <div className="bg-base-200 flex flex-col items-center">
      <article className="prose min-h-[77vh] pt-[2vh] pb-[2vh]">
        <h1>Contact</h1>
        <p>Hello, I&apos;m Eden Xu, a Full Stack Software Engineer and Independent Developer based in Australia. With a passion for technology and a drive to innovate, I have dedicated my career to developing software solutions that make a difference.</p>
        <p>If you have any questions, concerns, or feedback regarding our service or terms, please don&apos;t hesitate to contact us. You can reach me via email at <a href="mailto:edenx97@gmail.com">edenx97@gmail.com</a></p>
        <p>We strive to respond to all inquiries within 24 hours and appreciate your patience.</p>
      </article>
      <Footbar />
    </div>
  );
}