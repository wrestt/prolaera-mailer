import React from 'react';
import { renderEmail } from 'react-html-email';
import Email from 'react-html-email/lib/components/Email';
import CourseCertificate from '../../components/certificate/courseCertificate';
import CourseInfo from '../../components/course/courseInfo';
import Footer from '../../components/footer';
import buildHeader from '../../components/header';
import SubHeader from '../../components/SubHeader';
import css from '../templateCSS';

const courseCertificateEmail = async (course, user, imageUrl) => {
  try {
    const Header = await buildHeader(imageUrl);
    return renderEmail(
      <Email title="You have completed a course" headCSS={css}>
        <Header />
        <SubHeader subText="You have received a" header="Certificate" />
        <CourseCertificate {...course} {...user} />
        <CourseInfo {...course} />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};

export default courseCertificateEmail;
