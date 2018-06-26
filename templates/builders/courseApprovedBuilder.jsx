import React from 'react';
import { Email, renderEmail } from 'react-html-email';
import Button from '../../components/button';
import CourseInfo from '../../components/course/courseInfo';
import Footer from '../../components/footer';
import builderHeader from '../../components/header';
import SubHeader from '../../components/subHeader';
import css from '../templateCSS.js';

const CourseReviewBuilder = async (completeCourse, imageUrl) => {
  try {
    const headerText = (
      <p>
        {completeCourse.name} has been reviewed and approved by an admin at your firm and is now in the marketplace.
      </p>
    );
    const bodyElement = <Button text={'Log In'} />;
    const Header = await builderHeader(imageUrl);
    return renderEmail(
      <Email title={`${completeCourse.name}` + ' has been approved'} headCSS={css}>
        <Header />
        <SubHeader subText={'Your course has been'} header={'Approved'} />
        <CourseInfo {...completeCourse} header={headerText} footer={bodyElement} />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};

export default CourseReviewBuilder;
