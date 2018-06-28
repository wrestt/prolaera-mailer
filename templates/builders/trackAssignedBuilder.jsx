import React from 'react';
import { Email, renderEmail } from 'react-html-email';
import Footer from '../../components/footer';
import builderHeader from '../../components/header';
import TrackInfo from '../../components/learningTrack/trackInfo';
import SubHeader from '../../components/subHeader';
import css from '../templateCSS.js';

const trackAssignedBuilder = async (completeTrack, imageUrl) => {
  try {
    const Header = await builderHeader(imageUrl);
    const profileId = 'testProfileId';
    const trackId = 'testTrackId';
    return renderEmail(
      <Email title="You've been assigned a new learning track" headCSS={css}>
        <Header
          text={'View Track'}
          link={'https://app.prolaera.com/#/users/' + profileId + '/learning/track?track=' + trackId}
        />
        <SubHeader subText={'New track'} header={'Assigned'} message={'You have been assigned a new learning track.'} />
        <TrackInfo {...completeTrack} buttonText={'View Track'} profileId={profileId} trackId={trackId} />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};

export default trackAssignedBuilder;
