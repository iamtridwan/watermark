import React from 'react';
import ContactBox from '../components/contact/contactbox/ContactBox';
import ContactHeader from '../components/contact/contactHeader/ContactHeader';
import Updates from '../components/Home/update/Updates';
const Bounce = require("react-reveal/Bounce");

const Contact = () => {
  return (
    <>
    <ContactHeader />
    <ContactBox />
    <Updates />
    </>
  )
}

export default Contact