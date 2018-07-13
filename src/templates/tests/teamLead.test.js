import renderer from 'react-test-renderer';
import writeFile from '../../helpers/writeFileHelper';
import teamLeadBuilder from '../builders/teamLeadBuilder';

describe('teamLead Email', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';
  const team = {
    name: 'Test CPA Team',
    description: 'This team of CPAs handles all of the tax preparation in the firm.',
    buttonText: 'Test Button Text',
    buttonLink: 'www.testButtonLink.com'
  };
  it('returns teamLead email html', async () => {
    const emailHtml = await teamLeadBuilder(team, logoUrl);
    expect(emailHtml).toBeDefined();
  });

  it('checks snapshot', async () => {
    const emailHtml = await teamLeadBuilder(team, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const teamLeadJson = emailComponent.toJSON();
    expect(teamLeadJson).toMatchSnapshot();
  });

  it('writes an html file', async () => {
    const email = await teamLeadBuilder(team, logoUrl);
    const saved = await writeFile(email, 'teamLeadTest.html');
    expect(saved).toEqual(true);
  });
});
