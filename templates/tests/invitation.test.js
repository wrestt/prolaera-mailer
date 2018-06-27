import renderer from 'react-test-renderer';
import writeFile from '../../lib/writeFileHelper';
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

  it('writes an html file', async () => {
    const email = await invitationEmail(eventInvite, logoUrl);
    const saved = await writeFile(email, 'inviteTest.html');
    expect(saved).toEqual(true);
  });
});
