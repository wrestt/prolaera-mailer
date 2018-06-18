import React from 'react';
import { Email, renderEmail } from 'react-html-email';
import Footer from '../components/footer';
import builderHeader from '../components/header';
import EventInfo from '../components/registration/eventInfo';
import SubFooter from '../components/registration/subFooter';
import SubHeader from '../components/registration/SubHeader';
import css from './templateCSS.js';
const registrationEmail = async (event, imageUrl) => {
  try {
    const Header = await builderHeader(imageUrl);
    return renderEmail(
      <Email title="Registration Successful!" headCSS={css}>
        <Header />
        <SubHeader subText={'You have been'} header={'Registered'} />
        <EventInfo
          {...event}
          courseName={event.course_name}
          startTime={event.delivery_date}
          endTime={event.delivery_end_date}
          recommendedCredits={event.hours}
          location={event.delivery_location}
          deliveryMethod={event.delivery_method}
          targetAudience={event.courseAudience}
          prep={event.prep}
          price={event.price}
          prerequisites={event.prerequisites}
          level={event.level}
          learningObjectives={event.objectives}
          description={event.summary}
        />
        <SubFooter
          text={
            "More information about this event can be found by navigating to the Prolaera website. Don't have an account with us? No problem. It only takes a few seconds to get one started."
          }
          subtext={'We hope you enjoy your event!'}
        />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};

export default registrationEmail;
