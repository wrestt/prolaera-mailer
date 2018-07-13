import React from 'react';
import { Email, renderEmail } from 'react-html-email';
import Footer from '../../components/footer';
import builderHeader from '../../components/header';
import SubHeader from '../../components/subHeader';
import TeamInfo from '../../components/team/teamInfo';
import css from '../templateCSS.js';

const teamLeadBuilder = async (completeTeam, imageUrl) => {
  try {
    const Header = await builderHeader(imageUrl);
    const adminProfileId = 'adminProfileId';
    return renderEmail(
      <Email title="You've been added as a team leader" headCSS={css}>
        <Header text={'View Team'} link={'https://app.prolaera.com/#/admin/' + adminProfileId + '/dashboard'} />
        <SubHeader
          subText={'New team'}
          header={'Leader'}
          message={'You have been added to ' + completeTeam.name + ' as team leader.'}
        />
        <TeamInfo {...completeTeam} buttonText={'View Team'} buttonLink={adminProfileId} />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};

export default teamLeadBuilder;
