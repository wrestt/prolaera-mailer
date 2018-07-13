import renderer from 'react-test-renderer';
import writeFile from '../../helpers/writeFileHelper';
import courseAssignedBuilder from '../builders/courseAssignedBuilder';
import course from './json/completeCourse.json';

describe('courseAssigned Email', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';
  it('returns courseAssigned email html', async () => {
    const emailHtml = await courseAssignedBuilder(course, logoUrl);
    expect(emailHtml).toBeDefined();
  });

  it('checks snapshot', async () => {
    const emailHtml = await courseAssignedBuilder(course, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const courseAssignedJson = emailComponent.toJSON();
    expect(courseAssignedJson).toMatchSnapshot();
  });

  it('writes an html file', async () => {
    const email = await courseAssignedBuilder(course, logoUrl);
    const saved = await writeFile(email, 'courseAssignedTest.html');
    expect(saved).toEqual(true);
  });
});
