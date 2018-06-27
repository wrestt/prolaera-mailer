import React from 'react';
import { Box, Item } from 'react-html-email';

class SubHeader extends React.Component {
  render() {
    const { subText = '', header = '', message = '' } = this.props;

    return (
      <div
        id="subHeaderWrapper"
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '20px',
          marginBottom: '20px',
          maxWidth: '500px',
          fontFamily: 'Arial, sans-serif',
          border: '1px solid lightgray',
          borderRadius: '5px',
          boxShadow: '1px 1px 8px darkgray'
        }}
      >
        <Box className="subHeader" align="center" width="100%">
          <Item>
            <table id="subHeaderTable" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
              <tr>
                <td>
                  <p style={{ color: 'gray', fontStyle: 'italic', marginBottom: '5px' }}>{subText}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h2 style={{ fontSize: '35px', marginTop: '0px', marginBottom: '5px' }}>{header}</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <p>{message}</p>
                </td>
              </tr>
            </table>
          </Item>
        </Box>
      </div>
    );
  }
}

export default SubHeader;
