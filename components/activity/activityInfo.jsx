import React from 'react';
import { Box, Item } from 'react-html-email';
import Button from '../button';

class ActivityInfo extends React.Component {
  render() {
    const { name = '', author = '', buttonText = 'View Activity' } = this.props;

    return (
      <div
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '20px',
          textAlign: 'center',
          border: '1px solid lightgray',
          borderRadius: '5px',
          maxWidth: '500px',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          boxShadow: '1px 1px 8px darkgray'
        }}
      >
        <Box align="center" width="100%">
          <Item>
            <h5>You have been assigned to a new Activity:</h5>
          </Item>
          <Item align="center">
            <h3>{name}</h3>
          </Item>
          <Item align="left">
            <h4>
              By: <span style={{ fontWeight: 'normal' }}>{author}</span>
            </h4>
          </Item>
          <Item>
            <Button text={buttonText} />
          </Item>
        </Box>
      </div>
    );
  }
}

export default ActivityInfo;
