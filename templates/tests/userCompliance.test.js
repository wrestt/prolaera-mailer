import fs from 'fs';
import renderer from 'react-test-renderer';
import userCompliance from '../userCompliance';
import completeCompliance from './completeCompliance';

describe('Email compliance Report', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';
  it('it returns an emails html', async () => {
    const emailHtml = await userCompliance(completeCompliance, logoUrl);
    expect(emailHtml).toBeDefined();
  });

  it('it checks snapshot with no set logo', async () => {
    const emailHtml = await userCompliance(completeCompliance, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const userComplianceJson = emailComponent.toJSON();
    expect(userComplianceJson).toMatchSnapshot();
  });

  it('it writes an html file', async () => {
    const email = await userCompliance(completeCompliance, logoUrl);
    const saved = await writeFile(email);
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
