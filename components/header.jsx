import 'jest-styled-components';
import probe from 'probe-image-size';
import React from 'react';
import { Box, Image, Item } from 'react-html-email';
import styled from 'styled-components';

class Header extends React.Component {
  render() {
    const {
      link = 'https://app.prolaera.com',
      text = 'prolaera.com',
      url = 'https://assets.prolaera.com/prolaeraLogo_fullText.png',
      width = 200,
      height = 47
    } = this.props;

    const resizedWidth = width * (47 / height);
    const resizedHeight = 47;

    const HeaderWrapper = styled.div`
      background-color: red;
    `;

    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;
    `;

    const Paragraph = styled.p`
      color: yellowgreen;
      font-size: 5vw;
      float: right;
    `;

    return (
      <HeaderWrapper>
        <Paragraph>Testy boy</Paragraph>
        <Box className={'header'} align="center" width="100%" style={{ backgroundColor: '#F7F7F7' }}>
          <Item align="center">
            <table align="center" cellSpacing={0} style={{ padding: '15px', maxWidth: '584px' }}>
              <tr align="left">
                <td width="292px">
                  <Image className={'logo'} alt="logo" src={url} width={resizedWidth} height={resizedHeight} />
                </td>
                <td width="252px" style={{ textAlign: 'center' }}>
                  <Title>Hello I'm a styled component!</Title>
                  <a href={link}> {text} → </a>
                </td>
              </tr>
            </table>
          </Item>
        </Box>
      </HeaderWrapper>
    );
  }
}

const builderHeader = async imageUrl => {
  try {
    const { url, height, width } = await probe(imageUrl);
    const image = { url, height, width };
    return props => <Header {...props} {...image} />;
  } catch (error) {
    throw error;
  }
};

export default builderHeader;
