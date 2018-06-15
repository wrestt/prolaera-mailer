import fs from 'fs';
import React from 'react';
import renderer from 'react-test-renderer';
import EventInfo from '../../components/registration/eventInfo';
import eventInvite from '../../templates/tests/eventInvite';
import invitationEmail from '../eventInvitationBuilder';
describe('invitation Email', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';
  it('returns invitation subHeader email html', async () => {
    const emailHtml = await invitationEmail(eventInvite, logoUrl);
    expect(emailHtml).toBeDefined();
  });

  it('checks snapshot', async () => {
    const emailHtml = await invitationEmail(eventInvite, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const registrationJson = emailComponent.toJSON();
    expect(registrationJson).toMatchSnapshot();
  });

  it('writes an html file', async () => {
    const email = await invitationEmail(eventInvite, logoUrl);
    const saved = await writeFile(email);
    expect(saved).toEqual(true);
  });

  it('successfully parses JSON data', async () => {
    const eventInfo = renderer.create(<EventInfo courseName={eventInvite.course_name} />);
    let eventInfoString = JSON.stringify(eventInfo.toJSON());
    let containsCourseName = eventInfoString.includes('Fraud in the Digital Age');
    expect(containsCourseName).toEqual(true);
  });

  it('creates snapshot with JSON data passed in', async () => {
    const email = await invitationEmail(eventInvite, logoUrl);
    const emailHtml = await writeFile(email);
    expect(emailHtml).toMatchSnapshot();
  });

  it('provides default email output values if none are provided', async () => {
    let eventInfo = renderer.create(<EventInfo />);
    let emailString = JSON.stringify(eventInfo.toJSON());
    let containsDefaultInfo = emailString.includes('None provided');
    expect(containsDefaultInfo).toEqual(true);
  });
});

async function writeFile(emailHtml) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${__dirname}/inviteTest.html`, emailHtml, err => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(true);
    });
  });
}
