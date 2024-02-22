'use client'
import * as React from 'react';
import Footbar from '../components/footbar';

export default function PrivacyPolicy() {
  return (
    <div className="bg-base-200 flex flex-col items-center">
      <article className="prose min-h-[77vh] pt-[2vh] pb-[2vh]">
        <h1>Privacy Policy</h1>
        <p>Welcome to Simple Tech Resume, where we leverage AI technology to generate professional resumes tailored to your technical skills and experiences. This Privacy Policy outlines how we collect, use, protect, and share information gathered about you in connection with our service.</p>
        <h3>1. Information Collection</h3>
        <p>We collect information directly from you when you use our services. This includes personal information (such as your name, contact details, email address), professional details (such as your employment history, education, skills), and any other information you choose to provide to generate your resume.</p>
        <h3>2. Use of Information</h3>
        <p>The information we collect is used to provide you with a personalized resume creation service. We use your details to generate and customize your resume according to your input and preferences.</p>
        <h3>3. Sharing of Information</h3>
        <p>We do not share your personal information with third parties except as necessary to provide our service (e.g., cloud hosting providers) or as required by law. Any third-party providers used by us will only receive information necessary to provide their respective services.</p>
        <h3>4. Your Rights</h3>
        <p>You have the right to access, correct, or delete your personal information stored with us at any time. To exercise these rights, please contact us directly through our website.</p>
        <h3>5. Data Security</h3>
        <p>We are committed to protecting the security of your personal information. We take reasonable measures to safeguard your data from unauthorized access, disclosure, alteration, or destruction.</p>
        <h3>6. Changes to This Privacy Policy</h3>
        <p>We reserve the right to modify this privacy policy at any time. We will notify you of any significant changes by posting the new privacy policy on our website. Your continued use of our service after such changes constitutes your acceptance of the new privacy policy.</p>
      </article>
      <Footbar />
    </div>
  );
}