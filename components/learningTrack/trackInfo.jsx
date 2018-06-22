import React from 'react';
import { Box, Item } from 'react-html-email';
import Button from '../../components/button';

class TrackInfo extends React.Component {
  render() {
    const { name = '', author = '', description = '', buttonProps } = this.props;

    return (
      <div
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
          border: '1px solid lightgray',
          borderRadius: '5px',
          width: '500px',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          marginBottom: '20px',
          boxShadow: '1px 1px 8px darkgray'
        }}
      >
        <Box className={'trackInfo'} align="center" width="500px">
          <Item align="left">
            <p style={{ fontSize: '18px', fontWeight: 'normal', marginTop: '5px', marginBottom: '5px' }}>
              You have been assigned a new learning track.
            </p>
            <h3>
              Track Name: <span style={{ fontSize: '18px', fontWeight: 'normal' }}>{name}</span>
            </h3>
            <h3>
              Track Author: <span style={{ fontSize: '18px', fontWeight: 'normal' }}>{author}</span>
            </h3>
            <h3>Track Description</h3>
            <p style={{ fontSize: '18px', fontWeight: 'normal' }}>{description}</p>
          </Item>
          <Item align="left">
            <p style={{ fontSize: '18px', fontWeight: 'normal' }}>
              More information about this track can be found by navigating to the Prolaera website.
            </p>
            {buttonProps ? <Button text={buttonProps} /> : <span />}
          </Item>
        </Box>
      </div>
    );
  }
}

export default TrackInfo;
