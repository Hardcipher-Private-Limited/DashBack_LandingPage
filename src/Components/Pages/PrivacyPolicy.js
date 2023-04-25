import React from "react";
import "../../assets/css/Privacy.css";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | DashBack - Your Trusted Cashback App</title>
        <meta
          name="description"
          content="At DashBack, we take your privacy seriously. Our privacy policy outlines how we collect, use, and protect your personal information, so you can shop and earn with confidence. Learn more about our commitment to your privacy today."
        />
      </Helmet>
      <div className="container " style={{ paddingTop: 10 }}>
        <div className="privacy_header text-center ">Privacy Policy</div>
        <div className="privacy_text">
          We, HardCipher Private Limited, are registered at B-3/17, First Floor,
          Model Town First, New Delhi - 110009 and headquartered Address - 1,
          hereinafter referred to as Dashback or DashBack or DB. At Dashback, we
          value your trust & respect your privacy. This Privacy Policy provides
          you with details about the manner in which your data is collected,
          stored & used by us. You are advised to read this Privacy Policy
          carefully. By downloading and using the Dashback application/
          website/WAP site you expressly give us consent to collect, use &
          disclose your personal information in accordance with this Privacy
          Policy. If you do not agree to the terms of the policy, please do not
          use or access Dashback.
        </div>
        <div className="privacy_text">
          Note: Our privacy policy may change at any time without prior
          notification. To make sure that you are aware of any changes, kindly
          review the policy periodically. This Privacy Policy shall apply
          uniformly to Dashback applications, desktop website & mobile WAP site.
          Users will be intimated of changes to this policy via emails sent to
          their registered email addresses when required.
        </div>
        <div className="privacy_text_header">General</div>
        <div className="privacy_text">
          We will not sell, share or rent your personal information to any 3rd
          party or use your email address/mobile number for unsolicited emails
          and/or SMS. Any emails and/or SMS sent by Dashback will only be in
          connection with the provision of agreed services & products and this
          Privacy Policy.
        </div>
        <div className="privacy_text">
          Periodically, we may reveal general statistical information about
          Dashback & its users, such as number of visitors, number and type of
          goods and services purchased, etc.
        </div>
        <div className="privacy_text">
          We reserve the right to communicate your personal information to any
          third party that makes a legally-compliant request for its disclosure.
        </div>
        <div className="privacy_text_header">Personal Information</div>
        <div className="privacy_text">
          Personal Information means and includes all information that can be
          linked to a specific individual or to identify any individual, such as
          name, address, mailing address, telephone number, email ID, credit
          card number, cardholder name, card expiration date, information about
          your mobile phone, DTH service, data card, electricity connection,
          Smart Tags and any details that may have been voluntarily provide by
          the user in connection with availing any of the services on Dashback.
        </div>
        <div className="privacy_text">
          When you browse through the Dashback mobile app, we may collect
          information regarding the mobile/ tab device details, domain and host
          from which you access the internet, the Internet Protocol [IP] address
          of the computer or Internet service provider [ISP] you are using, and
          anonymous site statistical data.
        </div>

        <div className="privacy_text_header">Use of Personal Information</div>
        <div className="privacy_text">
          We use personal information to provide you with services & products
          you explicitly requested for, to resolve disputes, troubleshoot
          concerns, help promote safe services, collect money, measure consumer
          interest in our services, inform you about offers, products, services,
          updates, customize your experience, detect & protect us against error,
          fraud and other criminal activity, enforce our terms and conditions,
          etc.
        </div>
        <div className="privacy_text">
          We also use your contact information to send you offers based on your
          previous orders and interests. We may occasionally ask you to complete
          optional online surveys. These surveys may ask you for contact
          information and demographic information (like zip/PIN code, age,
          gender, etc.). We use this data to customize your experience at
          Dashback, providing you with content that we think you might be
          interested in and to display content according to your preferences.
        </div>

        <div className="privacy_text_header">Cookies</div>
        <div className="privacy_text">
          "cookie" is a small piece of information stored by a web server on a
          web browser so it can be later read back from that browser. Dashback
          uses cookie and tracking technology depending on the features offered.
          No personal information will be collected via cookies and other
          tracking technology; however, if you previously provided personally
          identifiable information, cookies may be tied to such information.
          Aggregate cookie and tracking information may be shared with third
          parties.
        </div>

        <div className="privacy_text_header">Links to Other Sites</div>
        <div className="privacy_text">
          Our site links to other websites that may collect personally
          identifiable information about you. Dashback is not responsible for
          the privacy practices or the content of those linked websites.
        </div>

        <div className="privacy_text_header">Security</div>
        <div className="privacy_text">
          Dashback has stringent security measures in place to protect the loss,
          misuse, and alteration of the information under our control. Whenever
          you change or access your account information, we offer the use of a
          secure server. Once your information is in our possession we adhere to
          strict security guidelines, protecting it against unauthorized access.
        </div>
        <div className="privacy_text_header">Consent</div>
        <div className="privacy_text">
          By using Dashback and/or by providing your information, you consent to
          the collection and use of the information you disclose on Dashback in
          accordance with this Privacy Policy, including but not limited to your
          consent for sharing your information as per this privacy policy.
        </div>
        <div className="privacy_text">
          We are required to make an automated IVR or a manual verification call
          to the customer for registration or updates by time to time. You will
          receive this verification call even if your number is registered for
          the Do Not Disturb (DND) option with your mobile carrier. For
          merchants accepting payments through Dashback for their websites /
          app/stores/shops
        </div>
        <div className="privacy_text">First response time - 2 working days</div>
        <div className="privacy_text">
          Final resolution time - 4 working days
        </div>
        <div className="privacy_text">Helpline - +919513318243</div>
        <div className="privacy_text">
          Final resolution time - 4 working days
        </div>
        <div className="privacy_text">
          If Dashback needs additional time for any case, the same will be
          informed to the customer along with reason of delay and expected
          resolution timelines.
        </div>
        <div className="privacy_text mt-4"> Level 2 (Complaints)</div>
        <div className="privacy_text p-1">
          If customer's issue is not resolved even after contacting various
          complaint resolution channels, he/she can reach out to our grievance
          officer at:
        </div>
        <div className="privacy_text">Grievance Officer</div>
        <div className="privacy_text">Anand Thakur</div>
        <div className="privacy_text">
          Address: HardCipher Private Limited, B-3/17, First Floor, Model Town
          First, Delhi-110009
        </div>
        <div className="privacy_text">Email: anand.thakur@dashback.in</div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
