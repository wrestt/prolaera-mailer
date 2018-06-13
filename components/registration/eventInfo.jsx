import React from 'react';
import { Box, Item } from 'react-html-email';
import { PrettyDate } from '../../lib/dateHelpers';

class EventInfo extends React.Component {
  render() {
    const {
      courseName,
      startTime,
      endTime,
      recommendedCredits,
      creditHours,
      location,
      deliveryMethod,
      price,
      targetAudience,
      prep,
      prerequisites,
      level,
      learningObjectives,
      description
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
          fontFamily: 'Arial, sans-serif'
        }}
      >
        <Box className={'eventInfo'} align="center" width="500px">
          <Item align="left">
            <h2 align="center" style={{ marginTop: '0px' }}>
              Event Information:
            </h2>
            <h3 align="center">
              <em>
                {courseName} ({deliveryMethod})
              </em>
            </h3>
            <p>
              You have been registered for a new event. More details on the event are included below, and be sure to
              open and save the attached file to your calendar.
            </p>
          </Item>
          <Item align="left">
            <div style={{ paddingLeft: '30px' }}>
              <h3>
                Start Time: <span style={{ fontWeight: 'normal' }}>{PrettyDate(startTime)}</span>
              </h3>
              <h3>
                End Time: <span style={{ fontWeight: 'normal' }}>{PrettyDate(endTime)}</span>
              </h3>
              <h3>Recommended CPE Credit(s):</h3>
              <ul>
                <li>
                  {recommendedCredits} - {creditHours} Hour(s)
                </li>
              </ul>
              <h3>
                Location:{' '}
                <a href="#">
                  {' '}
                  <span style={{ fontWeight: 'normal' }}>{location}</span>
                </a>
              </h3>
              <h3>
                Delivery Method: <span style={{ fontWeight: 'normal' }}>{deliveryMethod}</span>
              </h3>
              <h3>
                Price: <span style={{ fontWeight: 'normal' }}>{price}</span>
              </h3>
              <h3>
                Target Audience: <span style={{ fontWeight: 'normal' }}>{targetAudience}</span>
              </h3>
              <h3>Prep:</h3>
              <div dangerouslySetInnerHTML={{ __html: prep }} />
              <h3>Prerequisites:</h3>
              <div dangerouslySetInnerHTML={{ __html: prerequisites }} /> <h3> Level: </h3>
              <div>{level}</div>
              <h3>Learning Objectives:</h3>
              <div dangerouslySetInnerHTML={{ __html: learningObjectives }} />
              <h3>
                Description: <span style={{ fontWeight: 'normal' }}>{description}</span>{' '}
              </h3>
            </div>
          </Item>
        </Box>
      </div>
    );
  }
}

export default EventInfo;
