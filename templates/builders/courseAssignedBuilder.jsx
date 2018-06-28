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
        <Header
          {...completeCourse}
          text={'View Course'}
          link={'https://app.prolaera.com/#/courses' + completeCourse.course_id}
        />
        <SubHeader subText={'New course'} header={'Assigned'} message={'You have been assigned a new course.'} />
        <CourseInfo {...completeCourse} buttonText={'View Course'} buttonLink={completeCourse.course_id} />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};

export default courseAssignedBuilder;
