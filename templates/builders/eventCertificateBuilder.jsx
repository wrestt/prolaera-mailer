import React from 'react';
import { renderEmail } from 'react-html-email';
import Email from 'react-html-email/lib/components/Email';
import EventCertificate from '../../components/certificate/eventCertificate';
import EventInfo from '../../components/event/eventInfo';
import Footer from '../../components/footer';
import buildHeader from '../../components/header';
import SubHeader from '../../components/SubHeader';
import css from '../templateCSS';

const eventCertificateEmail = async (event, user, imageUrl) => {
  try {
    const Header = await buildHeader(imageUrl);
    return renderEmail(
      <Email title="You have completed a course" headCSS={css}>
        <Header />
        <SubHeader subText="You have received a" header="Certificate" />
        <EventCertificate {...event} {...user} />
        <EventInfo {...event} />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};

export default eventCertificateEmail;
