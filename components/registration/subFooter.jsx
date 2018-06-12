import React from 'react';
import { Box, Item } from 'react-html-email';

class SubFooter extends React.Component {
  render() {
    return (
      <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
        <Box className={'subFooter'} align="center" width="500px">
          <Item>
            <p>Sub Footer Component</p>
          </Item>
        </Box>
      </div>
    );
  }
}

export default SubFooter;
