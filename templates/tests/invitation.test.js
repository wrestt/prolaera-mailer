import fs from 'fs';
import renderer from 'react-test-renderer';
import eventInvite from '../../templates/tests/json/eventInvite';
import invitationEmail from '../builders/eventInvitationBuilder';

describe('invitation Email', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';

  it('checks snapshot', async () => {
    const emailHtml = await invitationEmail(eventInvite, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const registrationJson = emailComponent.toJSON();
    expect(registrationJson).toMatchSnapshot();
  });

  it.skip('writes an html file', async () => {
    const email = await invitationEmail(eventInvite, logoUrl);
    const saved = await writeFile(email);
    expect(saved).toEqual(true);
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
