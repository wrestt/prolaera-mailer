import React from 'react';
import { Box, Item } from 'react-html-email';
import { PrettyDate } from '../../lib/dateHelpers';
import deliveryDict from '../../lib/deliveryHelper';
import setInnerHtml from '../../lib/domHelpers';
class EventInfo extends React.Component {
  render() {
    const {
      registeredForOrInvitedTo = 'added to',
      courseName = 'None provided',
      startTime = 'None provided',
      endTime = 'None provided',
      recommendedCredits = ['None provided'],
      location = 'None provided',
      deliveryMethod = 'None provided',
      price = 0,
      targetAudience = 'Any',
      prep = 'None required',
      prerequisites = 'None required',
      level = 'Any',
      learningObjectives = 'None provided',
      description = 'None provided'
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
            <h3 align="center" style={{ marginTop: '0px' }}>
              Event Information:
            </h3>
            <h4 align="center">
              <em>
                {courseName} ({deliveryDict[deliveryMethod]})
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
                Start Time: <span style={{ fontWeight: 'normal' }}>{PrettyDate(startTime)}</span>
              </h4>
              <h4>
                End Time: <span style={{ fontWeight: 'normal' }}>{PrettyDate(endTime)}</span>
              </h4>
              <h4>Recommended CPE Credit(s):</h4>
              <ul>
                {Array.apply(null, recommendedCredits).map(item => (
                  <li key={item.category_id}>
                    {item.subject_area} - {item.credits} Hour(s)
                  </li>
                ))}
              </ul>
              <h4>
                Location:{' '}
                <a href="#">
                  {' '}
                  <span style={{ fontWeight: 'normal' }}>{location}</span>
                </a>
              </h4>
              <h4>
                Delivery Method: <span style={{ fontWeight: 'normal' }}>{deliveryDict[deliveryMethod]}</span>
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
                Description:{' '}
                <span style={{ fontWeight: 'normal' }}>
                  <div dangerouslySetInnerHTML={setInnerHtml(description)} />
                </span>{' '}
              </h4>
            </div>
          </Item>
        </Box>
      </div>
    );
  }
}
EventInfo.defaultProps = {
  price: 'Free'
};

export default EventInfo;
