import React from 'react';

const TermsAndConditions = () => {
    const containerStyle = {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      textAlign: 'left', // Text alignment set to left
    };

  const headingStyle = {
    color: '#000',
    fontWeight:'bold',
  };
  const headingStyle01 = {
    color: '#000',
    padding:"50px 0"
   
  };


  const listStyle = {
    marginLeft: '20px',
  };

  const paragraphStyle = {
    marginBottom: '15px',
  };

  return (
    <div style={containerStyle}>
      <center><h1 style={headingStyle01}><b>Terms and Conditions</b></h1></center>
      
      <p style={paragraphStyle}>
        Welcome to brandconnectionme.com. By using our website, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms, please do not use our website.
      </p>
      
      <h4 style={headingStyle}>1. Acceptance of Terms</h4>
      <p style={paragraphStyle}>
        By accessing or using the brandconnectionme.com website, you agree to be bound by these terms and conditions. If you do not agree to all of the terms and conditions, you must not use our website.
      </p>
      
      <h4 style={headingStyle}>2. User Conduct</h4>
      <p style={paragraphStyle}>
        While using our website, you agree not to engage in any prohibited conduct, including but not limited to:
      </p>
      <ul style={{ ...listStyle, ...paragraphStyle }}>
        <li>Violating applicable laws and regulations.</li>
        <li>Interfering with the proper functioning of the website.</li>
        <li>Unauthorized access to any part of the website.</li>
      </ul>

      <h4 style={headingStyle}>3. Intellectual Property</h4>
      <p style={paragraphStyle}>
        All content on this website is the property of brandconnectionme.com and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our express written permission.
      </p>

      <h4 style={headingStyle}>4. Privacy Policy</h4>
      <p style={paragraphStyle}>
        Our privacy policy explains how we collect, use, and protect your personal information. By using our website, you consent to the terms of our privacy policy.
      </p>

      <h4 style={headingStyle}>5. Limitation of Liability</h4>
      <p style={paragraphStyle}>
        We are not liable for any damages or losses resulting from your use of the website. This includes, but is not limited to, direct, indirect, incidental, consequential, and punitive damages.
      </p>

      <h4 style={headingStyle}>6. Changes to Terms</h4>
      <p style={paragraphStyle}>
        We reserve the right to change these terms and conditions at any time. Your continued use of the website after any changes indicates your acceptance of the modified terms.
      </p>

      <h4 style={headingStyle}>7. Governing Law</h4>
      <p style={paragraphStyle}>
        These terms and conditions are governed by and construed in accordance with the laws of [your jurisdiction]. Any disputes arising from or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in [your jurisdiction].
      </p>

      <p style={{ ...paragraphStyle, marginTop: '20px' }}>
        For questions or concerns about these terms and conditions, please contact us at <a href="mailto:info@brandconnectionme.com">info@brandconnectionme.com</a>.
      </p>
    </div>
  );
}

export default TermsAndConditions;
