import renderer from 'react-test-renderer';
import writeFile from '../../helpers/writeFileHelper';
import course from '../../templates/tests/json/completeCourse';
import user from '../../templates/tests/json/completeUser';
import certificate from '../../templates/tests/json/completeCertificate';
import courseCertificateEmail from '../builders/courseCertificateBuilder';

describe('eventCertificateBuilder', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';

  it('checks snapshot', async () => {
    const emailHtml = await courseCertificateEmail(course, user, certificate, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const certificateJSON = emailComponent.toJSON();
    expect(certificateJSON).toMatchSnapshot();
  });

  it('writes an HTML file', async () => {
    const email = await courseCertificateEmail(course, user, certificate, logoUrl);
    const saved = await writeFile(email, 'courseCertificateTest.html');
    expect(saved).toEqual(true);
  });
});
