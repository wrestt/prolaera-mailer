import React from 'react';
import { Box, Item } from 'react-html-email';
import { PrettyDate } from '../../lib/dateHelpers';
import setInnerHtml from '../../lib/domHelpers';
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

    const deliveryDict = {
      0: 'Self-Study',
      1: 'Group-Live',
      2: 'Group-Internet / Webinar',
      3: 'Publication',
      4: 'Instruction',
      5: 'University',
      6: 'Self-Study (Non-Interactive)',
      7: 'Carry Over'
    };

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
            <h3 align="center" style={{ marginTop: '0px' }}>
              Event Information:
            </h3>
            <h4 align="center">
              <em>
                {courseName} ({deliveryDict[deliveryMethod]})
              </em>
            </h4>
            <p>
              You have been registered for a new event. More details on the event are included below, and be sure to
              open and save the attached file to your calendar.
            </p>
          </Item>
          <Item align="left">
            <div style={{ paddingLeft: '30px' }}>
              <h4>
                Start Time: <span style={{ fontWeight: 'normal' }}>{PrettyDate(startTime)}</span>
              </h4>
              <h4>
                End Time: <span style={{ fontWeight: 'normal' }}>{PrettyDate(endTime)}</span>
              </h4>
              <h4>Recommended CPE Credit(s):</h4>
              <ul>
                <li>
                  {recommendedCredits} - {creditHours} Hour(s)
                </li>
              </ul>
              <h4>
                Location:{' '}
                <a href="#">
                  {' '}
                  <span style={{ fontWeight: 'normal' }}>{location}</span>
                </a>
              </h4>
              <h4>
                Delivery Method: <span style={{ fontWeight: 'normal' }}>{deliveryMethod}</span>
              </h4>
              <h4>
                Price: <span style={{ fontWeight: 'normal' }}>{price}</span>
              </h4>
              <h4>
                Target Audience: <span style={{ fontWeight: 'normal' }}>{targetAudience}</span>
              </h4>
              <h4>Prep:</h4>
              <div dangerouslySetInnerHTML={setInnerHtml(prep)} />
              <h4>Prerequisites:</h4>
              <div dangerouslySetInnerHTML={setInnerHtml(prerequisites)} /> <h4> Level: </h4>
              <div>{level}</div>
              <h4>Learning Objectives:</h4>
              <div dangerouslySetInnerHTML={setInnerHtml(learningObjectives)} />
              <h4>
                Description: <span style={{ fontWeight: 'normal' }}>{description}</span>{' '}
              </h4>
            </div>
          </Item>
        </Box>
      </div>
    );
  }
}

export default EventInfo;
