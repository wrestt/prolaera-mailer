import React from 'react';
import { Box, Image, Item } from 'react-html-email';

class Header extends React.Component {
  render() {
    const {
      link = 'http://app.prolaera.com',
      text = 'prolaera.com'
    } = this.props;
    return (
      <Box
        className={'header'}
        align="center"
        width="100%"
        style={{ backgroundColor: '#F7F7F7' }}
      >
        <Item align="center">
          <table
            align="center"
            cellSpacing={0}
            style={{ padding: '15px', maxWidth: '584px' }}
          >
            <tr align="left">
              <td width="292px">
                <Image
                  alt="react"
                  src={this.props.src}
                  width={200}
                  height={47}
                />
              </td>
              <td width="252px" style={{ textAlign: 'center' }}>
                <a href={link}> {text} → </a>
              </td>
            </tr>
          </table>
        </Item>
      </Box>
    );
  }
}

export default Header;
