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
    const buttonText = 'Log In';
    const buttonLink = '';
    return renderEmail(
      <Email title="You've been assigned a new learning track" headCSS={css}>
        <Header />
        <SubHeader subText={'New track'} header={'Assigned'} />
        <TrackInfo {...completeTrack} text={buttonText} link={buttonLink} />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};

export default trackAssignedBuilder;
