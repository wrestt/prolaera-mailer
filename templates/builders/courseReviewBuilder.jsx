import React from 'react';
import { Email, renderEmail } from 'react-html-email';
import CourseInfo from '../../components/course/courseInfo';
import Footer from '../../components/footer';
import builderHeader from '../../components/header';
import SubHeader from '../../components/subHeader';
import css from '../templateCSS.js';

const CourseReviewBuilder = async (completeCourse, imageUrl) => {
  try {
    const Header = await builderHeader(imageUrl);
    return renderEmail(
      <Email title="New course review on Prolaera" headCSS={css}>
        <Header />
        <SubHeader subText={'New course'} header={'Review'} />
        <CourseInfo {...completeCourse} />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};

export default CourseReviewBuilder;
