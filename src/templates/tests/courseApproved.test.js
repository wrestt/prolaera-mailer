import renderer from 'react-test-renderer';
import writeFile from '../../helpers/writeFileHelper';
import courseApprovedBuilder from '../builders/courseApprovedBuilder';
import course from './json/completeCourse.json';

describe('courseApproved Email', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';
  it('returns courseApproved email html', async () => {
    const emailHtml = await courseApprovedBuilder(course, logoUrl);
    expect(emailHtml).toBeDefined();
  });

  it('checks snapshot', async () => {
    const emailHtml = await courseApprovedBuilder(course, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const courseApprovedJson = emailComponent.toJSON();
    expect(courseApprovedJson).toMatchSnapshot();
  });

  it('writes an html file', async () => {
    const email = await courseApprovedBuilder(course, logoUrl);
    const saved = await writeFile(email, 'courseApprovedTest.html');
    expect(saved).toEqual(true);
  });
});
