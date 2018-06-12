import React from 'react';
import { Email, renderEmail } from 'react-html-email';
import Footer from '../components/footer';
import builderHeader from '../components/header';
import EventInfo from '../components/registration/eventInfo';
import SubHeader from '../components/registration/registrationSubHeader';
import SubFooter from '../components/registration/subFooter';
import css from './templateCSS';

const registrationEmail = async (completeRegistration, imageUrl) => {
  try {
    const Header = await builderHeader(imageUrl);
    return renderEmail(
      <Email title="Registration Successful!" headCSS={css}>
        <Header />
        <SubHeader />
        <EventInfo {...completeRegistration} />
        <SubFooter />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};

export default registrationEmail;
