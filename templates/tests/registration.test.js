import renderer from 'react-test-renderer';
import writeFile from '../../lib/writeFileHelper';
import event from '../../templates/tests/json/event';
import registrationEmail from '../builders/eventRegistrationBuilder';
describe('registration Email', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';
  it('returns registration subHeader email html', async () => {
    const emailHtml = await registrationEmail(event, logoUrl);
    expect(emailHtml).toBeDefined();
  });

  it('checks snapshot', async () => {
    const emailHtml = await registrationEmail(event, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const registrationJson = emailComponent.toJSON();
    expect(registrationJson).toMatchSnapshot();
  });

  it('writes an html file', async () => {
    const email = await registrationEmail(event, logoUrl);
    const saved = await writeFile(email, 'eventTest.html');
    expect(saved).toEqual(true);
  });
});
