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
          borderRadius: '5px',
          width: '500px',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          marginBottom: '20px',
          backgroundColor: 'white'
        }}
      >
        <Box className="trackInfo" align="center" width="500px">
          <Item align="left">
            <p style={{ fontSize: '18px', fontWeight: 'normal', marginTop: '5px', marginBottom: '5px' }}>
              You have been assigned a new learning track.
            </p>
            <h3>
              Name: <span style={{ fontSize: '18px', fontWeight: 'normal' }}>{name}</span>
            </h3>
            <h3>
              Author: <span style={{ fontSize: '18px', fontWeight: 'normal' }}>{author}</span>
            </h3>
            <h3>Description:</h3>
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
