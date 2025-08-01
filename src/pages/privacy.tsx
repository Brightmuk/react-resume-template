import dynamic from 'next/dynamic';
import React from 'react';

const Header = React.memo(dynamic(() => import('../components/Sections/Header'), {ssr: false}));

const PrivacyPolicy: React.FC = React.memo(() => {
  return (
    <div>
      <Header/>
    <div className="prose prose-lg max-w-4xl px-4 py-10 mx-auto text-neutral-800 dark:text-neutral-100">
      
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> June 22, 2025</p>

      <p>
        This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your
        information when You use the Service and tells You about Your privacy rights and how the law protects You.
      </p>
      <p>
        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection
        and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help
        of the Free Privacy Policy Generator.
      </p>

      <h2>Interpretation and Definitions</h2>
      <h3>Interpretation</h3>
      <p>
        The words of which the initial letter is capitalized have meanings defined under the following conditions. The
        following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
      </p>

      <h3>Definitions</h3>
      <p>For the purposes of this Privacy Policy:</p>
      <ul>
        <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
        <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party.</li>
        <li><strong>Application</strong> refers to FlipIQ, the software program provided by the Company.</li>
        <li><strong>Company</strong> refers to FlipIQ (also “We”, “Us” or “Our”).</li>
        <li><strong>Country</strong> refers to: Kenya</li>
        <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a tablet.</li>
        <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
        <li><strong>Service</strong> refers to the Application.</li>
        <li><strong>Service Provider</strong> means any person who processes the data on behalf of the Company.</li>
        <li><strong>Third-party Social Media Service</strong> refers to any platform through which a User can log in to use the Service.</li>
        <li><strong>Usage Data</strong> refers to data collected automatically when using the Service.</li>
        <li><strong>You</strong> means the individual accessing the Service, or a legal entity on behalf of which such individual is using the Service.</li>
      </ul>

      <h2>Collecting and Using Your Personal Data</h2>
      <h3>Types of Data Collected</h3>

      <h4>Personal Data</h4>
      <p>
        While using Our Service, We may ask You to provide Us with certain personally identifiable information that can
        be used to contact or identify You.
      </p>

      <h4>Usage Data</h4>
      <p>
        Usage Data may include Your IP address, browser type, visited pages, timestamps, and diagnostic data. On mobile,
        it may also include device type, OS, and mobile browser info.
      </p>

      <h4>Information from Third-Party Social Media Services</h4>
      <p>
        If You register using Google, Facebook, Instagram, Twitter, or LinkedIn, we may collect data associated with that
        account, such as name and email.
      </p>

      <h3>Use of Your Personal Data</h3>
      <ul>
        <li>To provide and maintain the Service</li>
        <li>To manage Your Account</li>
        <li>For contract performance</li>
        <li>To contact You (email, SMS, push notifications)</li>
        <li>To provide You with updates, promotions, and offers</li>
        <li>To manage Your requests</li>
        <li>For business transfers, analysis, and improvements</li>
      </ul>

      <h3>Sharing Your Personal Information</h3>
      <ul>
        <li>With Service Providers</li>
        <li>With Affiliates and Business Partners</li>
        <li>In Business Transfers or Legal Compliance</li>
        <li>With Your Consent</li>
      </ul>

      <h4>AI-Generated Content Disclaimer</h4>
      <p>
        Our app may include content generated by AI. While we strive for accuracy, you are responsible for verifying
        information. We disclaim liability from reliance on AI-generated content.
      </p>

      <h2>Retention of Your Personal Data</h2>
      <p>
        We retain data as long as necessary to fulfill the purposes outlined in this policy and comply with legal
        obligations.
      </p>

      <h2>Transfer of Your Personal Data</h2>
      <p>
        Your data may be transferred and maintained outside Your jurisdiction. We take appropriate steps to ensure secure
        handling of your data.
      </p>

      <h2>Delete Your Personal Data</h2>
      <p>
        You may delete or request deletion of your data through your account or by contacting us, unless we are legally
        required to retain it.
      </p>

      <h2>Disclosure of Your Personal Data</h2>
      <h3>Business Transactions</h3>
      <p>Your data may be transferred in case of a merger or acquisition.</p>

      <h3>Law Enforcement and Legal Requirements</h3>
      <p>We may disclose data as required by law or to protect rights and users' safety.</p>

      <h2>Security of Your Personal Data</h2>
      <p>
        While We use security measures to protect Your data, no method of electronic storage is 100% secure. We cannot
        guarantee absolute security.
      </p>

      <h2>Children's Privacy</h2>
      <p>
        We do not knowingly collect data from users under 13. If we learn we have, we will delete it. Parental consent
        may be required by law in some cases.
      </p>

      <h2>Links to Other Websites</h2>
      <p>
        Our Service may contain links to external sites. We are not responsible for their content or privacy practices.
        Please review their policies.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this policy and will notify users via email or notices on our Service. Please review this page
        periodically.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy:
        <br />
        By email: <a href="mailto:be.rightmuk@gmail.com">be.rightmuk@gmail.com</a>
        <br />
        Website: <a href="https://www.brightmuk.com" rel="noopener noreferrer" target="_blank">www.brightmuk.com</a>
      </p>
    </div>
    </div>
  );
});

export default PrivacyPolicy;
