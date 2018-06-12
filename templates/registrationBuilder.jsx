import React from 'react';
import { Email, renderEmail } from 'react-html-email';
import Footer from '../components/footer';
import builderHeader from '../components/header';
import EventInfo from '../components/registration/eventInfo';
import SubHeader from '../components/registration/registrationSubHeader';
import SubFooter from '../components/registration/subFooter';
import css from './templateCSS.js';

const registrationEmail = async (completeRegistration, imageUrl) => {
  try {
    const Header = await builderHeader(imageUrl);
    return renderEmail(
      <Email title="Registration Successful!" headCSS={css}>
        <Header />
        <SubHeader />
        <EventInfo
          courseName={completeRegistration.course_name}
          startTime={completeRegistration.delivery_date}
          endTime={completeRegistration.delivery_end_date}
          recommendedCredits={completeRegistration.hours.subject_area}
          creditHours={completeRegistration.hours.credits}
          location={completeRegistration.delivery_location}
          deliveryMethod={completeRegistration.delivery_method}
          targetAudience={completeRegistration.courseAudience}
          prep={completeRegistration.prep}
          prerequisites={completeRegistration.prerequisites}
          level={completeRegistration.level}
          learningObjectives={completeRegistration.objectives}
          description={completeRegistration.summary}
        />
        <SubFooter />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};

export default registrationEmail;
