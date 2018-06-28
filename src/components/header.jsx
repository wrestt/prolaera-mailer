import probe from 'probe-image-size';
import React from 'react';
import { Box, Image, Item } from 'react-html-email';

class Header extends React.Component {
  render() {
    const {
      event_id,
      course_id,
      link = 'https://app.prolaera.com',
      text = 'prolaera.com',
      url = 'https://assets.prolaera.com/prolaeraLogo_fullText.png',
      width = 200,
      height = 47
    } = this.props;

    const resizedWidth = width * (47 / height);
    const resizedHeight = 47;

    return (
      <Box className="emailHeader" align="center" width="100%" style={{ backgroundColor: '#F7F7F7' }}>
        <Item align="center">
          <table align="center" cellSpacing={0} style={{ padding: '15px', maxWidth: '584px' }}>
            <tr align="left">
              <td width="292px">
                <Image className="headerLogo" alt="logo" src={url} width={resizedWidth} height={resizedHeight} />
              </td>
              <td width="252px" style={{ textAlign: 'center' }}>
                <div>
                  {event_id && course_id ? (
                    <a href={'https://app.prolaera.com/#/events/' + `${event_id}`}>View Event</a>
                  ) : (
                    <div />
                  )}{' '}
                </div>
                <div>
                  {!event_id && course_id ? (
                    <a href={'https://app.prolaera.com/#/courses/' + `${course_id}`}>View Course</a>
                  ) : (
                    <div />
                  )}{' '}
                </div>
                <div>{!event_id && !course_id ? <a href={link}>{text}</a> : <div />} </div>
              </td>
            </tr>
          </table>
        </Item>
      </Box>
    );
  }
}

const buildHeader = async imageUrl => {
  try {
    const { url, height, width } = await probe(imageUrl);
    const image = { url, height, width };
    return props => <Header {...props} {...image} />;
  } catch (error) {
    throw error;
  }
};

export default buildHeader;

export { Header };
