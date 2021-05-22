import React, { useState } from 'react';

import { submitForm } from '../../utils';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

const Footer = (props) => {
  const [email, setEmail] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm('subscribe', {
      subject: 'Subscribe',
      email,
    })
      .then(() =>
        alert('Your email was received. We will keep you updated.'),
      )
      .catch((error) => alert(error));
    setEmail('');
  };

  return (
    <>
      <FooterTop
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
      />
      <FooterBottom />
    </>
  );
};

export default Footer;
