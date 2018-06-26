import React from 'react';
import { Email, renderEmail } from 'react-html-email';
import CourseInfo from '../../components/course/courseInfo';
import Footer from '../../components/footer';
import builderHeader from '../../components/header';
import SubHeader from '../../components/subHeader';
import css from '../templateCSS.js';

const courseApprovedBuilder = async (completeCourse, imageUrl) => {
  try {
    const Header = await builderHeader(imageUrl);
    return renderEmail(
      <Email title={`${completeCourse.name}` + ' has been approved'} headCSS={css}>
        <Header />
        <SubHeader subText={'Your course has been'} header={'Approved'} />
        <CourseInfo
          {...completeCourse}
          headerProps={'Your course, ' + `${completeCourse.name}` + ', has been approved.'}
          buttonProps={'Log In'}
        />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};

export default courseApprovedBuilder;
