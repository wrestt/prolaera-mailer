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
        <CourseReview
          courseId={completeCourse.course_id}
          by={completeCourse.by}
          courseName={completeCourse.name}
          recommendedCredits={completeCourse.hours[0].subject_area}
          creditHours={completeCourse.hours[0].credits}
          deliveryMethod={completeCourse.delivery_method}
          targetAudience={completeCourse.courseAudience}
          prep={completeCourse.prep}
          prerequisites={completeCourse.prerequisites}
          level={completeCourse.level}
          learningObjectives={completeCourse.objectives}
          description={completeCourse.summary}
        />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};

export default CourseReviewBuilder;
