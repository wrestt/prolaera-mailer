import React from 'react';
import { Box, Item } from 'react-html-email';
import { PrettyDate } from '../../lib/dateHelpers';
import deliveryHelper from '../../lib/deliveryHelper';
import setInnerHtml from '../../lib/domHelpers';
class EventInfo extends React.Component {
  render() {
    const {
      registeredForOrInvitedTo = '',
      course_name = '',
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
          border: '1px solid lightgray',
          borderRadius: '5px',
          width: '500px',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          boxShadow: '1px 1px 8px darkgray'
        }}
      >
        <Box className='eventInfo' align="center" width="500px">
          <Item align="left">
            <h3 align="center" style={{ marginTop: '0px' }}>
              Event Information:
            </h3>
            <h4 align="center">
              <em>
                {course_name} ({deliveryHelper(delivery_method)})
              </em>
            </h4>
            <p>
              You have been {registeredForOrInvitedTo} a new event. More details on the event are included below, and be
              sure to open and save the attached file to your calendar.
            </p>
          </Item>
          <Item align="left">
            <div style={{ paddingLeft: '30px' }}>
              <h4>
                Start Time: <span style={{ fontWeight: 'normal' }}>{PrettyDate(delivery_date)}</span>
              </h4>
              <h4>
                End Time: <span style={{ fontWeight: 'normal' }}>{PrettyDate(delivery_end_date)}</span>
              </h4>
              <h4>Recommended CPE Credit(s):</h4>
              <ul>
                {hours.map(item => (
                  <li key={item.toString()} style={{ padding: '5px' }}>
                    {item.subject_area} - {item.credits} Hour(s)
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
              <h4>Prep:</h4>
              <div dangerouslySetInnerHTML={setInnerHtml(prep)} />
              <h4>Prerequisites:</h4>
              <div dangerouslySetInnerHTML={setInnerHtml(prerequisites)} />
              <h4> Level: </h4>
              <div>{level}</div>
              <h4>Learning Objectives:</h4>
              <div dangerouslySetInnerHTML={setInnerHtml(objectives)} />
              <h4>
                Summary:
                <span style={{ fontWeight: 'normal' }}>
                  <div dangerouslySetInnerHTML={setInnerHtml(summary)} />
                </span>
              </h4>
            </div>
          </Item>
        </Box>
      </div>
    );
  }
}

export default EventInfo;
