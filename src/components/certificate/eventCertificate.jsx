import React from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { Box, Item } from 'react-html-email';
import { PrettyDate } from '../../helpers/dateHelpers';
import Button from '../button';

class EventCertificate extends React.Component {
  render() {
    const {
      course_name = '',
      delivery_date = '',
      delivery_end_date = '',
      first = '',
      header = 'Congratulations',
      body,
      profile_uid,
      event_id,
      pdf,
      button1Text = 'View Certificate',
      button2Text = 'Complete Evaluation',
      button1Link = `${pdf}`,
      button2Link = 'https://app.prolaera.com/#/users/' + `${profile_uid}` + '/events/' + `${event_id}` + '/review'
    } = this.props;

    return (
      <div
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '20px',
          textAlign: 'center',
          borderRadius: '5px',
          maxWidth: '500px',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          backgroundColor: 'white'
        }}
      >
        <Box align="center" width="100%">
          <Item>
            <div
              style={{
                maxWidth: '300px',
                marginLeft: 'auto',
                marginRight: 'auto',
                border: '1px solid lightgray',
                borderRadius: '8px',
                background: 'linear-gradient(to bottom right, #ffd11a, #fff0b3, #ffd633)',
                boxShadow: '1px 1px 8px darkgray'
              }}
            >
              <h3 style={{ marginBottom: '5px' }}>{course_name}</h3>
              <h6 style={{ marginTop: '0px' }}>
                {PrettyDate(delivery_date)} - {PrettyDate(delivery_end_date)}
              </h6>
            </div>
          </Item>
          <Item>
            <p>{body}</p>
          </Item>
          <Item>
            <Button text={button1Text} link={button1Link} />
            <hr style={{ width: '45px' }} />
            <Button text={button2Text} link={button2Link} />
          </Item>
        </Box>
      </div>
    );
  }
}

export default EventCertificate;
