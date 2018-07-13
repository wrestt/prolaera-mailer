import React from 'react';
import { Box, Item } from 'react-html-email';

class GenericInfo extends React.Component {
  render() {
    const { header = '', body = '', footer = '' } = this.props;

    return (
      <div
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'left',
          borderRadius: '5px',
          maxWidth: '500px',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          marginBottom: '20px',
          backgroundColor: 'white'
        }}
      >
        <Box align="center" width="100%">
          <Item>
            <div>{header}</div>
          </Item>
          <Item>
            <div>{body}</div>
          </Item>
          <Item>
            <div>{footer}</div>
          </Item>
        </Box>
      </div>
    );
  }
}

export default GenericInfo;
