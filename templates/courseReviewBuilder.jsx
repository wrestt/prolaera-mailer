import React from 'react';
import { Email, renderEmail } from 'react-html-email';
import CourseReview from '../components/courseReview/courseReview';
import CourseReviewSubHeader from '../components/courseReview/courseReviewSubHeader';
import Footer from '../components/footer';
import builderHeader from '../components/header';
import css from './templateCSS.js';

const CourseReviewBuilder = async (completeCourse, imageUrl) => {
  try {
    const Header = await builderHeader(imageUrl);
    return renderEmail(
      <Email title="Registration Successful!" headCSS={css}>
        <Header />
        <CourseReviewSubHeader />
        <CourseReview {...completeCourse} />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};

export default CourseReviewBuilder;
