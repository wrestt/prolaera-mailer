import React from 'react';
import { Email, renderEmail } from 'react-html-email';
import EventInfo from '../../components/event/eventInfo';
import Footer from '../../components/footer';
import builderHeader from '../../components/header';
import SubFooter from '../../components/subFooter';
import SubHeader from '../../components/SubHeader';
import css from '../templateCSS.js';

const registrationEmail = async (event, imageUrl) => {
  try {
    const Header = await builderHeader(imageUrl);
    return renderEmail(
      <Email title="Registration Successful!" headCSS={css}>
        <Header />
        <SubHeader subText="You have been" header="Registered" />
        <EventInfo {...event} />
        <SubFooter
          text="More information about this event can be found by navigating to the Prolaera website. Don't have an account with us? No problem. It only takes a few seconds to get one started."
          subtext="We hope you enjoy your event!"
        />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};

export default registrationEmail;
