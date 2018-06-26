import React from 'react';
import { Box, Item } from 'react-html-email';
import Button from '../../components/button';

class teamInfo extends React.Component {
  render() {
    const { name = '', description = '', buttonProps } = this.props;

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
        <Box className="teamInfo" align="center" width="500px">
          <Item align="left">
            <p style={{ fontSize: '18px', fontWeight: 'normal', marginTop: '5px', marginBottom: '5px' }}>
              You have been added to a team as team leader.
            </p>
            <h3>
              Name: <span style={{ fontSize: '18px', fontWeight: 'normal' }}>{name}</span>
            </h3>
            <h3>Description:</h3>
            <p style={{ fontSize: '18px', fontWeight: 'normal' }}>{description}</p>
          </Item>
          <Item align="left">
            <p style={{ fontSize: '18px', fontWeight: 'normal' }}>
              More information about your team can be found by navigating to the Prolaera website.
            </p>
            {buttonProps ? <Button text={buttonProps} /> : <span />}
          </Item>
        </Box>
      </div>
    );
  }
}

export default teamInfo;
