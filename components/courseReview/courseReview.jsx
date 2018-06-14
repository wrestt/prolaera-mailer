import React from 'react';
import { Box, Item } from 'react-html-email';

class CourseReview extends React.Component {
  render() {
    const {
      adminProfileId = 'testAdminProfileId',
      courseId,
      by,
      courseName,
      recommendedCredits,
      creditHours,
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
          width: '500px',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          marginBottom: '20px'
        }}
      >
        <Box className={'courseReview'} align="center" width="500px">
          <Item align="left">
            <p style={{ fontSize: '18px', fontWeight: '300', marginTop: '5px', marginBottom: '5px' }}>
              You have been selected to review {courseName}.
            </p>
          </Item>
          <Item align="left">
            <div style={{ paddingLeft: '40px' }}>
              <h1>Course Information:</h1>
              <h3>
                By: <span style={{ fontWeight: '300' }}>{by}</span>
              </h3>
              <h3>Recommended CPE Credit(s):</h3>
              <ul>
                <li style={{ fontSize: '18px', fontWeight: '300' }}>
                  {recommendedCredits} - {creditHours} Hour(s)
                </li>
              </ul>
              <h3>
                Delivery Method: <span style={{ fontWeight: '300' }}>{deliveryMethod}</span>
              </h3>
              <h3>
                Price: <span style={{ fontWeight: '300' }}>{{ price } > 0 ? { price } : 'Free'}</span>
              </h3>
              <h3>
                Target Audience: <span style={{ fontWeight: '300' }}>{targetAudience}</span>
              </h3>
              <h3>Prep:</h3>
              <div style={{ fontSize: '18px', fontWeight: '300' }} dangerouslySetInnerHTML={{ __html: prep }} />
              <h3>Prerequisites:</h3>
              <div
                style={{ fontSize: '18px', fontWeight: '300' }}
                dangerouslySetInnerHTML={{ __html: prerequisites }}
              />
              <h3>
                Level: <span style={{ fontWeight: '300' }}>{level}</span>
              </h3>
              <h3>
                Learning Objectives:{' '}
                <div
                  style={{ fontSize: '18px', fontWeight: '300' }}
                  dangerouslySetInnerHTML={{ __html: learningObjectives }}
                />
              </h3>
              <h3>Description:</h3>
              <div style={{ fontSize: '18px', fontWeight: '300' }} dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </Item>
          <Item align="left">
            <p style={{ fontSize: '18px', fontWeight: '300' }}>
              More information about this course can be found by navigating to the Prolaera website.
            </p>
            <div
              className="buttonContainer"
              style={{ width: '100%', textAlign: 'center', padding: '20px 0px 20px 0px' }}
            >
              <a
                href={'admin/' + { adminProfileId } + '/' + { courseId } + '/review'}
                className="viewCourseButton"
                style={{
                  maxWidth: '200px',
                  backgroundColor: '#68B63E',
                  padding: '14px 14px 14px 14px',
                  color: 'white',
                  textDecoration: 'none'
                }}
              >
                View Course
              </a>
            </div>
          </Item>
        </Box>
      </div>
    );
  }
}

export default CourseReview;
