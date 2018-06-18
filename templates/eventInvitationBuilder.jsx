import React from 'react';
import { Email, renderEmail } from 'react-html-email';
import Footer from '../components/footer';
import builderHeader from '../components/header';
import EventInfo from '../components/registration/eventInfo';
import SubFooter from '../components/registration/subFooter';
import SubHeader from '../components/registration/SubHeader';
import css from './templateCSS.js';

const invitationEmail = async (event, imageUrl) => {
  try {
    const Header = await builderHeader(imageUrl);
    return renderEmail(
      <Email title="You have been Invited" headCSS={css}>
        <Header />
        <SubHeader subText={'You have been'} header={'Invited'} />
        <EventInfo {...event} registeredForOrInvitedTo={'invited to'} />
        <SubFooter
          text={
            "All you need to do is RSVP. If you decide to go, you will be navigated to the Prolaera website. Don't have an account with us? No problem, it only takes a few seconds to get one started!"
          }
        />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};

export default invitationEmail;
