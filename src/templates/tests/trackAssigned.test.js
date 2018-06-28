import renderer from 'react-test-renderer';
import writeFile from '../../helpers/writeFileHelper';
import trackAssignedBuilder from '../builders/trackAssignedBuilder';

describe('trackAssigned Email', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';
  const track = {
    name: 'Q4 Tax Planning Track',
    author: 'CPE Authors Inc',
    description: 'This is the foremost learning track for CPAs.'
  };
  it('returns trackAssigned email html', async () => {
    const emailHtml = await trackAssignedBuilder(track, logoUrl);
    expect(emailHtml).toBeDefined();
  });

  it('checks snapshot', async () => {
    const emailHtml = await trackAssignedBuilder(track, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const registrationJson = emailComponent.toJSON();
    expect(registrationJson).toMatchSnapshot();
  });

  it('writes an html file', async () => {
    const email = await trackAssignedBuilder(track, logoUrl);
    const saved = await writeFile(email, 'trackAssignedTest.html');
    expect(saved).toEqual(true);
  });
});
