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
          <Item>
            <h3 style={{ marginTop: '0px' }}>Learning Track Information:</h3>
          </Item>
          <Item align="left">
            <h4 style={{ marginTop: '0px' }}>
              Name: <span style={{ fontWeight: 'normal' }}>{name}</span>
            </h4>
            <h4>
              Author: <span style={{ fontWeight: 'normal' }}>{author}</span>
            </h4>
            <h4 style={{ marginBottom: '0px' }}>Description:</h4>
            <p style={{ marginTop: '10px' }}>{description}</p>
          </Item>
          <Item align="left">
            <p>More information about this track can be found by navigating to the Prolaera website.</p>
            {buttonProps ? <Button text={buttonProps} /> : <span className="buttonSpan" />}
          </Item>
        </Box>
      </div>
    );
  }
}

export default TrackInfo;
