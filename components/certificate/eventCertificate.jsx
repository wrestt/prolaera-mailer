import React from 'react';
import { Box, Item } from 'react-html-email';
import { PrettyDate } from '../../lib/dateHelpers';
import Button from '../button';

class EventCertificate extends React.Component {
  render() {
    const {
      course_name = '',
      delivery_date = '',
      delivery_end_date = '',
      first = '',
      header = 'Congratulations',
      body = 'Attached is your Certificate of Completion. We hope that you enjoyed your course! If you have any suggestions for improving your CPE experience, please reply directly to this email and let us know.',
      button1Text = 'View Certificate',
      button2Text = 'Complete Evaluation'
    } = this.props;

    return (
      <div
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '20px',
          textAlign: 'center',
          border: '1px solid lightgray',
          borderRadius: '5px',
          maxWidth: '500px',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          boxShadow: '1px 1px 8px darkgray'
        }}
      >
        <Box align="center" width="100%">
          <Item>
            <h4>
              {course_name}: {PrettyDate(delivery_date)} - {PrettyDate(delivery_end_date)}
            </h4>
          </Item>
          <Item>
            <h3>
              {header} {first},
            </h3>
          </Item>
          <Item>
            <p>{body}</p>
          </Item>
          <Item>
            <span style={{ display: 'inline' }}>
              <Button text={button1Text} /> <Button text={button2Text} />
            </span>
          </Item>
        </Box>
      </div>
    );
  }
}

export default EventCertificate;
