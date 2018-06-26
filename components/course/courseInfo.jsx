import React from 'react';
import { Box, Item } from 'react-html-email';
import deliveryHelper from '../../lib/deliveryHelper';
import Button from '../button';

class CourseInfo extends React.Component {
  render() {
    const {
      headerProps,
      buttonProps,
      adminProfileId = 'adminProfileId',
      course_id = '',
      name = '',
      by = '',
      hours = [{ credits: '', subject_area: '' }],
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
          maxWidth: '500px',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          marginBottom: '20px',
          boxShadow: '1px 1px 8px darkgray'
        }}
      >
        <Box className="courseReview" align="center" width="100%">
          <Item align="left">
            <div style={{ fontSize: '18px', fontWeight: 'normal', marginTop: '5px' }}>
              {headerProps ? (
                <p>{headerProps}</p>
              ) : (
                <em>
                  <h2>{name}</h2>
                </em>
              )}
            </div>
          </Item>
          <Item align="left">
            <div style={{ paddingLeft: '40px' }}>
              <h3>
                By: <span style={{ fontWeight: 'normal' }}>{by}</span>
              </h3>
              <h3>Recommended CPE Credit(s):</h3>
              <ul>
                <li style={{ fontSize: '18px', fontWeight: 'normal' }}>
                  {hours[0].subject_area} - {hours[0].credits} Hour(s)
                </li>
              </ul>
              <h3>
                Delivery Method: <span style={{ fontWeight: 'normal' }}>{deliveryHelper(delivery_method)}</span>
              </h3>
              <h3>
                Price: <span style={{ fontWeight: 'normal' }}>{{ price } > 0 ? { price } : 'Free'}</span>
              </h3>
              <h3>
                Target Audience: <span style={{ fontWeight: 'normal' }}>{courseAudience}</span>
              </h3>
              <h3>Prep:</h3>
              <div style={{ fontSize: '18px', fontWeight: 'normal' }} dangerouslySetInnerHTML={{ __html: prep }} />
              <h3>Prerequisites:</h3>
              <div
                style={{ fontSize: '18px', fontWeight: 'normal' }}
                dangerouslySetInnerHTML={{ __html: prerequisites }}
              />
              <h3>
                Level: <span style={{ fontWeight: 'normal' }}>{level}</span>
              </h3>
              <h3>
                Learning Objectives:
                <div
                  style={{ fontSize: '18px', fontWeight: 'normal' }}
                  dangerouslySetInnerHTML={{ __html: objectives }}
                />
              </h3>
              <h3>Description:</h3>
              <div style={{ fontSize: '18px', fontWeight: 'normal' }} dangerouslySetInnerHTML={{ __html: summary }} />
            </div>
          </Item>
          <Item align="left">
            <div>{buttonProps ? <Button text={buttonProps} /> : <span className="buttonSpan" />}</div>
          </Item>
        </Box>
      </div>
    );
  }
}

export default CourseInfo;
