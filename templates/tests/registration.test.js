import fs from 'fs';
import renderer from 'react-test-renderer';
import registrationEmail from '../registrationBuilder';
import completeRegistration from './completeRegistration';

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
