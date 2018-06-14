import React from 'react';
import { Email, renderEmail } from 'react-html-email';
import Footer from '../components/footer';
import builderHeader from '../components/header';
import EventInfo from '../components/registration/eventInfo';
import SubFooter from '../components/registration/subFooter';
import SubHeader from '../components/registration/SubHeader';
import css from './templateCSS.js';
const registrationEmail = async (completeRegistration, imageUrl) => {
  try {
    const Header = await builderHeader(imageUrl);
    return renderEmail(
      <Email title="Registration Successful!" headCSS={css}>
        <Header />
        <SubHeader subText={'You have been'} header={'Registered'} />
        <EventInfo
          courseName={completeRegistration.course_name}
          startTime={completeRegistration.delivery_date}
          endTime={completeRegistration.delivery_end_date}
          recommendedCredits={completeRegistration.hours[0].subject_area}
          creditHours={completeRegistration.hours[0].credits}
          location={completeRegistration.delivery_location}
          deliveryMethod={completeRegistration.delivery_method}
          targetAudience={completeRegistration.courseAudience}
          prep={completeRegistration.prep}
          prerequisites={completeRegistration.prerequisites}
          level={completeRegistration.level}
          learningObjectives={completeRegistration.objectives}
          description={completeRegistration.summary}
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
