import renderer from 'react-test-renderer';
import writeFile from '../../lib/writeFileHelper';
import user from '../../templates/tests/json/completeUser';
import event from '../../templates/tests/json/event';
import eventCertificateEmail from '../builders/eventCertificateBuilder';
describe('eventCertificateBuilder', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';

  it('checks snapshot', async () => {
    const emailHtml = await eventCertificateEmail(event, user, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const registrationJson = emailComponent.toJSON();
    expect(registrationJson).toMatchSnapshot();
  });

  it('should write an HTML file', async () => {
    const email = await eventCertificateEmail(event, user, logoUrl);
    const saved = await writeFile(email, 'eventCertificateTest.html');
    expect(saved).toEqual(true);
  });
});
