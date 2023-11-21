import React from 'react';

const PrivacyPolicy = () => {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    textAlign: 'left',
  };

  const headingStyle = {
    color: '#000',
    fontWeight: 'bold',
  };

  const headingStyle01 = {
    color: '#000',
    padding: '50px 0',
  };

  const listStyle = {
    marginLeft: '20px',
  };

  const paragraphStyle = {
    marginBottom: '15px',
  };

  return (
    <div style={containerStyle}>
      <center>
        <h1 style={headingStyle01}>
          <b>Privacy Policy</b>
        </h1>
      </center>

      <p style={paragraphStyle}>
        Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information. By using our website, you consent to the terms of this Privacy Policy.
      </p>

      <h4 style={headingStyle}>1. Information We Collect</h4>
      <p style={paragraphStyle}>
        We may collect the following types of information when you use our website:
      </p>
      <ul style={{ ...listStyle, ...paragraphStyle }}>
        <li>Personal information such as name, email, and contact details.</li>
        <li>Non-personal information such as browser type, IP address, and device information.</li>
      </ul>

      <h4 style={headingStyle}>2. Use of Information</h4>
      <p style={paragraphStyle}>
        We use the collected information for the following purposes:
      </p>
      <ul style={{ ...listStyle, ...paragraphStyle }}>
        <li>Providing and improving our services.</li>
        <li>Personalizing your experience on our website.</li>
        <li>Communicating with you regarding your inquiries.</li>
      </ul>

      <h4 style={headingStyle}>3. Information Sharing</h4>
      <p style={paragraphStyle}>
        We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.
      </p>

      <h4 style={headingStyle}>4. Security</h4>
      <p style={paragraphStyle}>
        We take reasonable measures to protect your information from unauthorized access or disclosure.
      </p>

      <h4 style={headingStyle}>5. Changes to Privacy Policy</h4>
      <p style={paragraphStyle}>
        We may update this Privacy Policy from time to time. Any changes will be reflected on this page.
      </p>

      <p style={{ ...paragraphStyle, marginTop: '20px' }}>
        For questions or concerns about this Privacy Policy, please contact us at{' '}
        <a href="mailto:info@brandconnectionme.com">info@brandconnectionme.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
