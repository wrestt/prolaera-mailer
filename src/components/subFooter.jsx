import React from 'react';
import { Box, Item } from 'react-html-email';

class SubFooter extends React.Component {
  render() {
    const { text, subtext = '' } = this.props;

    return (
      <div
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '20px',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
          borderRadius: '5px',
          padding: '20px',
          maxWidth: '500px',
          backgroundColor: 'white'
        }}
      >
        <Box className="subFooter" align="center" width="100%">
          <Item align="left">
            <p>{text}</p>
            <p>{subtext}</p>
          </Item>
        </Box>
      </div>
    );
  }
}

export default SubFooter;
