import React from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { Box, Item } from 'react-html-email';

class SubHeader extends React.Component {
  render() {
    const {
      profile_uid,
      subText = '',
      header = '',
      first,
      message = '',
      certMessage = 'Congratulations ' +
        `${first}` +
        '! ' +
        "You've been issued a new certificate of completion. Please take a few moments to complete an evaluation to help us improve by clicking the Complete Evaluation button below."
    } = this.props;

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
          borderRadius: '5px',
          backgroundColor: 'white'
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
                  <div>{profile_uid ? <p>{certMessage}</p> : <div />}</div>
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
