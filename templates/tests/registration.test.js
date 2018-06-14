import fs from 'fs';
import React from 'react';
import renderer from 'react-test-renderer';
import EventInfo from '../../components/registration/eventInfo';
import setInnerHtml from '../../lib/domHelpers';
import completeRegistration from '../../templates/tests/completeRegistration';
import registrationEmail from '../registrationBuilder';
describe('registration Email', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';
  it('returns registration subHeader email html', async () => {
    const emailHtml = await registrationEmail(completeRegistration, logoUrl);
    expect(emailHtml).toBeDefined();
  });

  it('checks snapshot', async () => {
    const emailHtml = await registrationEmail(completeRegistration, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const registrationJson = emailComponent.toJSON();
    expect(registrationJson).toMatchSnapshot();
  });

  it('writes an html file', async () => {
    const email = await registrationEmail(completeRegistration, logoUrl);
    const saved = await writeFile(email);
    expect(saved).toEqual(true);
  });

  it('successfully parses completeRegistration JSON data', async () => {
    const eventInfo = renderer.create(<EventInfo courseName={completeRegistration.course_name} />);
    let eventInfoString = JSON.stringify(eventInfo.toJSON());
    let containsCourseName = eventInfoString.includes('ASC 606 Update Training');
    expect(containsCourseName).toEqual(true);
  });

  it('creates snapshot with JSON data passed in', async () => {
    const email = await registrationEmail(completeRegistration, logoUrl);
    const emailHtml = await writeFile(email);
    expect(emailHtml).toMatchSnapshot();
  });
});

describe('domHelper functions', () => {
  it('checks setInnerHtml function is returning parsed data correctly', async () => {
    const testData1 = '<TABLE><tr><td>HELLO</tr></TABL>';
    const parsedData1 = setInnerHtml(testData1);
    const testData2 = '<svg><g/onload=alert(2)//<p>';
    const parsedData2 = setInnerHtml(testData2);
    const testData3 = '<UL><li><A HREF=//google.com>click</UL>';
    const parsedData3 = setInnerHtml(testData3);
    expect(parsedData1).toEqual({ __html: '<table><tbody><tr><td>HELLO</td></tr></tbody></table>' });
    expect(parsedData2).toEqual({ __html: '<svg><g></g></svg>' });
    expect(parsedData3).toEqual({ __html: '<ul><li><a href="//google.com">click</a></li></ul>' });
  });
});

async function writeFile(emailHtml) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${__dirname}/eventTest.html`, emailHtml, err => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(true);
    });
  });
}
