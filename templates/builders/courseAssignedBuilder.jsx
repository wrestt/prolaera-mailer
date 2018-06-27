import React from 'react';
import { Email, renderEmail } from 'react-html-email';
import CourseInfo from '../../components/course/courseInfo';
import Footer from '../../components/footer';
import builderHeader from '../../components/header';
import SubHeader from '../../components/subHeader';
import css from '../templateCSS.js';

const courseAssignedBuilder = async (completeCourse, imageUrl) => {
  try {
    const Header = await builderHeader(imageUrl);
    return renderEmail(
      <Email title={"You've been assigned a new course"} headCSS={css}>
        <Header {...completeCourse} />
        <SubHeader subText={'New course'} header={'Assigned'} />
        <CourseInfo {...completeCourse} buttonProps={'Log In'} />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};

export default courseAssignedBuilder;
