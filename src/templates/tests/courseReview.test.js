import renderer from 'react-test-renderer';
import writeFile from '../../helpers/writeFileHelper';
import courseReviewBuilder from '../builders/courseReviewBuilder';
import course from './json/completeCourse.json';

describe('courseReview Email', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';
  it('returns courseReview email html', async () => {
    const emailHtml = await courseReviewBuilder(course, logoUrl);
    expect(emailHtml).toBeDefined();
  });

  it('checks snapshot', async () => {
    const emailHtml = await courseReviewBuilder(course, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const registrationJson = emailComponent.toJSON();
    expect(registrationJson).toMatchSnapshot();
  });

  it('writes an html file', async () => {
    const email = await courseReviewBuilder(course, logoUrl);
    const saved = await writeFile(email, 'courseReviewTest.html');
    expect(saved).toEqual(true);
  });
});
