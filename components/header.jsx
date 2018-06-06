import React from 'react';
import { Box, Image, Item } from 'react-html-email';

class Header extends React.Component {
  componentDidMount() {
    console.log('Mounted');
  }

  render() {
    const {
      link = 'https://app.prolaera.com',
      text = 'prolaera.com',
      src = 'https://assets.prolaera.com/prolaeraLogo_fullText.png',
      width = 200,
      height = 47
    } = this.props;

    // TODO: Image size need to be caluclated here
    return (
      <Box className={'header'} align="center" width="100%" style={{ backgroundColor: '#F7F7F7' }}>
        <Item align="center">
          <table align="center" cellSpacing={0} style={{ padding: '15px', maxWidth: '584px' }}>
            <tr align="left">
              <td width="292px">
                <Image alt="logo" src={src} width={width} height={height} />
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
