import React from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { Email, renderEmail } from 'react-html-email';
import CourseInfo from '../../components/course/courseInfo';
import Footer from '../../components/footer';
import builderHeader from '../../components/header';
import SubHeader from '../../components/SubHeader';
import css from '../templateCSS';

const courseApprovedBuilder = async (completeCourse, imageUrl) => {
  try {
    const Header = await builderHeader(imageUrl);
    return renderEmail(
      <Email title={`${completeCourse.name}` + ' has been approved'} headCSS={css}>
        <Header text=" " />
        <SubHeader subText={'Your course has been'} header={'Approved'} />
        <CourseInfo {...completeCourse} />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};

export default courseApprovedBuilder;
