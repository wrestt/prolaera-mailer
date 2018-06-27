import React from 'react';
import { Box, Item } from 'react-html-email';
import deliveryHelper from '../../lib/deliveryHelper';
import setInnerHtml from '../../lib/domHelpers';
import Button from '../button';

class CourseInfo extends React.Component {
  render() {
    const {
      adminProfileId,
      buttonText,
      buttonLink,
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

    let newButtonLink = '';
    if (adminProfileId) {
      newButtonLink = 'admin/' + adminProfileId + '/' + buttonLink + '/review';
    } else {
      newButtonLink = 'courses/' + buttonLink;
    }

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
          fontFamily: 'Arial, sans-serif',
          marginBottom: '20px',
          backgroundColor: 'white'
        }}
      >
        <Box className="courseReview" align="center" width="100%">
          <Item align="left">
            <h3 align="center" style={{ marginTop: '0px' }}>
              Course Information:
            </h3>
            <h4 align="center" style={{ marginTop: '0px', marginBottom: '0px' }}>
              <em>
                {name} ({deliveryHelper(delivery_method)})
              </em>
            </h4>
          </Item>
          <Item align="left">
            <div style={{ paddingLeft: '40px' }}>
              <h4>
                By: <span style={{ fontWeight: 'normal' }}>{by}</span>
              </h4>
              <h4 style={{ marginBottom: '0px' }}>Recommended CPE Credit(s):</h4>
              <ul style={{ marginTop: '10px' }}>
                <li style={{ fontWeight: 'normal' }}>
                  {hours[0].subject_area} - {hours[0].credits} Hour(s)
                </li>
              </ul>
              <h4>
                Price: <span style={{ fontWeight: 'normal' }}>{{ price } > 0 ? { price } : 'Free'}</span>
              </h4>
              <h4>
                Target Audience: <span style={{ fontWeight: 'normal' }}>{courseAudience}</span>
              </h4>
              <h4 style={{ marginBottom: '0px' }}>Prep:</h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(prep)}
              />
              <h4 style={{ marginBottom: '0px' }}>Prerequisites:</h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(prerequisites)}
              />
              <h4>
                Level: <span style={{ fontWeight: 'normal' }}>{level}</span>
              </h4>
              <h4 style={{ marginBottom: '0px' }}>Learning Objectives:</h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(objectives)}
              />
              <h4 style={{ marginBottom: '0px' }}>Description:</h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(summary)}
              />
            </div>
          </Item>
          <Item align="left">
            <div>
              {buttonLink ? (
                <Button text={buttonText} link={'https://app.prolaera.com/#/' + newButtonLink} />
              ) : (
                <span className="buttonSpan" />
              )}
            </div>
          </Item>
        </Box>
      </div>
    );
  }
}

export default CourseInfo;
