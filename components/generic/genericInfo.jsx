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
          border: '1px solid lightgray',
          borderRadius: '5px',
          maxWidth: '500px',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          boxShadow: '1px 1px 8px darkgray',
          marginBottom: '20px'
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
