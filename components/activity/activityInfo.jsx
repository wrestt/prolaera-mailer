import React from 'react';
import { Box, Item } from 'react-html-email';

class ActivityInfo extends React.Component {
  render() {
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
          <Item />
        </Box>
      </div>
    );
  }
}

export default ActivityInfo;
