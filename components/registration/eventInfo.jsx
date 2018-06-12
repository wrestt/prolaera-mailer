import React from 'react';
import { Box, Item } from 'react-html-email';
import { PrettyDate } from '../../lib/dateHelpers';

class EventInfo extends React.Component {
  render() {
    const {
      completeRegistration,
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
      <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
        <Box className={'eventInfo'} align="center" width="500px">
          <Item align="left">
            <h1>Event Information:</h1>
            <h2>{courseName}</h2>
            <p>
              You have been registered for a new event. More details on the event are included below, and be sure to
              open and save the attached file to your calendar.
            </p>
          </Item>
          <Item align="left">
            <h3>Start Time: {PrettyDate(startTime)}</h3>
            <h3>End Time: {PrettyDate(endTime)}</h3>
            <h3>Recommended CPE Credit(s):</h3>
            <ul>
              <li>
                {recommendedCredits} - {creditHours}
              </li>
            </ul>
            <h3>
              Location: <a>{location}</a>
            </h3>
            <h3>Delivery Method: {deliveryMethod}</h3>
            <h3>Price: {price}</h3>
            <h3>Target Audience: {targetAudience}</h3>
            <h3>Prep:</h3>
            {prep}
            <h3>Prerequisites:</h3>
            {prerequisites}
            <h3>Level: {level} </h3>
            <h3>Learning Objectives: {learningObjectives}</h3>
            <h3>Description: {description} </h3>
          </Item>
        </Box>
      </div>
    );
  }
}

export default EventInfo;
