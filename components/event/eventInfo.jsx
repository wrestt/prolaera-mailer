import React from 'react';
import { Box, Item } from 'react-html-email';
import { PrettyDate } from '../../lib/dateHelpers';
import deliveryHelper from '../../lib/deliveryHelper';
import setInnerHtml from '../../lib/domHelpers';
import Button from '../button';

class EventInfo extends React.Component {
  render() {
    const {
      buttonText,
      event_id,
      course_name = '',
      buttonLink = 'https://app.prolaera.com/#/events/' + `${event_id}`,
      delivery_date = '',
      delivery_end_date = '',
      hours = [],
      delivery_location = '',
      delivery_method = 1,
      price = 0,
      courseAudience = '',
      prep = '',
      prerequisites = '',
      level = '',
      objectives = '',
      summary = ''
    } = this.props;

    return (
      <div
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
          borderRadius: '5px',
          maxWidth: '500px',
          padding: '20px',
          fontFamily: 'Arial, sans-serif'
        }}
      >
        <Box className="eventInfo" align="center" width="100%">
          <Item align="left">
            <h3 align="center" style={{ marginTop: '0px' }}>
              Event Information:
            </h3>
            <h4 align="center">
              <em>
                {course_name} ({deliveryHelper(delivery_method)})
              </em>
            </h4>
          </Item>
          <Item align="left">
            <div style={{ paddingLeft: '30px' }}>
              <h4>
                Start Time: <span style={{ fontWeight: 'normal' }}>{PrettyDate(delivery_date)}</span>
              </h4>
              <h4>
                End Time: <span style={{ fontWeight: 'normal' }}>{PrettyDate(delivery_end_date)}</span>
              </h4>
              <h4 style={{ marginBottom: '0px' }}>Recommended CPE Credit(s):</h4>
              <ul style={{ marginTop: '10px' }}>
                {hours.map((hour, index) => (
                  <li key={index} style={{ padding: '5px' }}>
                    {hour.subject_area} - {hour.credits} Hour(s)
                  </li>
                ))}
              </ul>
              <h4>
                Location:
                <a href={'https://www.google.com/maps/place/' + `${delivery_location}`}>
                  <span style={{ fontWeight: 'normal' }}>{delivery_location}</span>
                </a>
              </h4>
              <h4>
                Delivery Method: <span style={{ fontWeight: 'normal' }}>{deliveryHelper(delivery_method)}</span>
              </h4>
              <h4>
                Price: <span style={{ fontWeight: 'normal' }}>${price}.00</span>
              </h4>
              <h4>
                Target Audience: <span style={{ fontWeight: 'normal' }}>{courseAudience}</span>
              </h4>
              <h4 style={{ marginBottom: '0px' }}>Prep:</h4>
              <div className="innerHtmlStyles" dangerouslySetInnerHTML={setInnerHtml(prep)} />
              <h4 style={{ marginBottom: '0px' }}>Prerequisites:</h4>
              <div className="innerHtmlStyles" dangerouslySetInnerHTML={setInnerHtml(prerequisites)} />
              <h4>
                Level: <span style={{ fontWeight: 'normal' }}>{level}</span>
              </h4>
              <h4 style={{ marginBottom: '0px' }}>Learning Objectives:</h4>
              <div className="innerHtmlStyles" dangerouslySetInnerHTML={setInnerHtml(objectives)} />
              <h4 style={{ marginBottom: '0px' }}>Summary:</h4>
              <div className="innerHtmlStyles" dangerouslySetInnerHTML={setInnerHtml(summary)} />
            </div>
          </Item>
          <Item align="center">
            <div>{buttonText ? <Button text={buttonText} link={buttonLink} /> : <span className="buttonSpan" />}</div>
          </Item>
        </Box>
      </div>
    );
  }
}

export default EventInfo;
