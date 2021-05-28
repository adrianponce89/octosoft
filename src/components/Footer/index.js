import React, { useState } from 'react';

import addToMailchimp from 'gatsby-plugin-mailchimp';

import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    addToMailchimp(email)
      .then(({ msg, result }) => {
        console.log('msg', `${result}: ${msg}`);

        if (result !== 'success') {
          throw msg;
        }
        alert(msg);
      })
      .catch((err) => {
        console.log('err', err);
        alert(err);
      });
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
