import React from 'react';
import renderer from 'react-test-renderer';
import userCompliance from '../userCompliance';
import completeCompliance from './completeCompliance';
import fs from 'fs';

describe('Email compliance Report', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';
  it('it returns an emails html', async () => {
    const emailHtml = userCompliance(completeCompliance, logoUrl);
    expect(emailHtml).toBeDefined();
  });

  it('it checks snapshot with no set logo', () => {
    const component = renderer.create(userCompliance(completeCompliance));
    console.log(component);
    const userComplianceJson = component.toJSON();
    expect(userComplianceJson).toMatchSnapshot();
  });
  // Use to save html to a file to make building easier
  it.skip('it writes an html file', async () => {
    const emailHtml = userCompliance(completeCompliance, logoUrl);
    const saved = await writeFile(emailHtml);
    expect(saved).toEqual(true);
  });
});

async function writeFile(emailHtml) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${__dirname}/test.html`, emailHtml, err => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(true);
    });
  });
}
