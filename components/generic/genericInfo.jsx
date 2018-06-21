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
          textAlign: 'center',
          border: '1px solid lightgray',
          borderRadius: '5px',
          width: '500px',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          boxShadow: '1px 1px 8px darkgray'
        }}
      >
        <Box align="center">
          <Item>
            <p>{header}</p>
          </Item>
          <Item>
            <p>{body}</p>
          </Item>
          <Item>
            <p>{footer}</p>
          </Item>
        </Box>
      </div>
    );
  }
}

export default GenericInfo;
