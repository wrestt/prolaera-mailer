import React from 'react';
import { renderEmail } from 'react-html-email';
import Email from 'react-html-email/lib/components/Email';
import EventCertificate from '../../components/certificate/eventCertificate';
import EventInfo from '../../components/event/eventInfo';
import Footer from '../../components/footer';
import buildHeader from '../../components/header';
import SubHeader from '../../components/SubHeader';
import css from '../templateCSS';

const eventCertificateEmail = async (event, user, certificate, imageUrl) => {
  try {
    const Header = await buildHeader(imageUrl);
    return renderEmail(
      <Email title="You have completed an event" headCSS={css}>
        <Header text="Complete Evaluation" {...event} {...certificate} />
        <SubHeader {...user} subText="You have received a" header="Certificate" />
        <EventCertificate {...event} {...user} {...certificate} />
        <EventInfo {...event} />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};

export default eventCertificateEmail;
