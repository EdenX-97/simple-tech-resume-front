'use client'
import * as React from 'react';
import Footbar from '../components/footbar';

export default function TermsOfService() {
  return (
    <div className="bg-base-200 flex flex-col items-center">
      <article className="prose min-h-[77vh] pt-[2vh] pb-[2vh]">
        <h1>Terms of Service</h1>
        <p>These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Simple Tech Resume website and services (the &quot;Service&quot;). By accessing or using the Service, you agree to be bound by these Terms.</p>
        <h3>1. Use of Service</h3>
        <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You are responsible for all activities conducted through your account.</p>
        <h3>2. User Conduct</h3>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Service in any way that violates any applicable law or regulation.</li>
          <li>Use the Service to engage in any fraudulent or deceptive activities.</li>
          <li>Interfere with or disrupt the operation of the Service or servers or networks connected to the Service.</li>
          <li>Attempt to gain unauthorized access to any portion of the Service or any other systems or networks connected to the Service.</li>
        </ul>
        <h3>3. Intellectual Property</h3>
        <p>The Service and its original content, features, and functionality are owned by Simple Tech Resume and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
        <h3>4. Disclaimer</h3>
        <p>The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. Simple Tech Resume makes no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, or availability of the Service.</p>
        <h3>5. Limitation of Liability</h3>
        <p>In no event shall Simple Tech Resume be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
        <h3>6. Governing Law</h3>
        <p>These Terms shall be governed and construed in accordance with the laws of Australia, without regard to its conflict of law provisions.</p>
        <h3>7. Changes to Terms</h3>
        <p>Simple Tech Resume reserves the right, at its sole discretion, to modify or replace these Terms at any time. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.</p>
      </article>
      <Footbar />
    </div>
  );
}