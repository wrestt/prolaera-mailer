import React from 'react';
import { Box, Item } from 'react-html-email';
import Button from '../../components/button';

class teamInfo extends React.Component {
  render() {
    const { name = '', description = '', buttonText, buttonLink } = this.props;

    return (
      <div
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
          width: '500px',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          marginBottom: '20px',
          backgroundColor: 'white'
        }}
      >
        <Box className="teamInfo" align="center" width="500px">
          <Item align="center">
            <h3 style={{ marginTop: '0px' }}>Team Information:</h3>
          </Item>
          <Item align="left">
            <h4 style={{ marginTop: '0px' }}>
              Name: <span style={{ fontWeight: 'normal' }}>{name}</span>
            </h4>
            <h4 style={{ marginBottom: '0px' }}>Description:</h4>
            <p style={{ marginTop: '10px' }}>{description}</p>
          </Item>
          <Item align="left">
            <p>More information about your team can be found by navigating to the Prolaera website.</p>
            {buttonLink ? (
              <Button text={buttonText} link={'https://app.prolaera.com/#/admin/' + buttonLink + '/dashboard'} />
            ) : (
              <span className="buttonSpan" />
            )}
          </Item>
        </Box>
      </div>
    );
  }
}

export default teamInfo;
