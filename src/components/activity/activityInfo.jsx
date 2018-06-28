import React from 'react';
import { Box, Item } from 'react-html-email';
import Button from '../button';

class ActivityInfo extends React.Component {
  render() {
    const {
      name = '',
      author = '',
      profile_uid,
      activity_id,
      header = 'You have been assigned to a new Activity:',
      buttonText = 'View Details',
      button1Link = 'https://app.prolaera.com/#/users/' + `${profile_uid}` + '/activities' + `${activity_id}`
    } = this.props;

    return (
      <div
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '20px',
          textAlign: 'center',
          borderRadius: '5px',
          maxWidth: '500px',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          backgroundColor: 'white'
        }}
      >
        <Box align="center" width="100%">
          <Item>
            <h4>{header}</h4>
            <div
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '15px',
                border: '1px solid lightgray',
                boxShadow: '1px 1px 8px darkgray',
                maxWidth: '300px'
              }}
            >
              <h3 style={{ marginBottom: '0px' }}>
                <em>{name}</em>
              </h3>
              <h4 style={{ marginTop: '7px' }}>
                By: <span style={{ fontWeight: 'normal' }}>{author}</span>
              </h4>
            </div>
          </Item>
          <Item>
            <Button text={buttonText} link={button1Link} />
          </Item>
        </Box>
      </div>
    );
  }
}

export default ActivityInfo;
