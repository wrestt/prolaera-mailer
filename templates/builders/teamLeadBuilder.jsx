import React from 'react';
import { Email, renderEmail } from 'react-html-email';
import Footer from '../../components/footer';
import builderHeader from '../../components/header';
import SubHeader from '../../components/subHeader';
import TeamInfo from '../../components/team/teamInfo';
import css from '../templateCSS.js';

const CourseReviewBuilder = async (completeTeam, imageUrl) => {
  try {
    const Header = await builderHeader(imageUrl);
    const buttonText = 'Log In';
    return renderEmail(
      <Email title="You've been added as a team leader" headCSS={css}>
        <Header />
        <SubHeader subText={'New team'} header={'Leader'} />
        <TeamInfo {...completeTeam} buttonProps={buttonText} />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};

export default CourseReviewBuilder;
