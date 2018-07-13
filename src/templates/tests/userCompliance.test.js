import renderer from 'react-test-renderer';
import writeFile from '../../helpers/writeFileHelper';
import userCompliance from '../builders/userCompliance';
import completeCompliance from './json/completeCompliance';

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
    const saved = await writeFile(email, 'userComplianceTest.html');
    expect(saved).toEqual(true);
  });
});
