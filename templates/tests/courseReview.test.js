import fs from 'fs';
import renderer from 'react-test-renderer';
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

  it.skip('writes an html file', async () => {
    const email = await courseReviewBuilder(course, logoUrl);
    const saved = await writeFile(email);
    expect(saved).toEqual(true);
  });
});

async function writeFile(emailHtml) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${__dirname}/html/courseReviewTest.html`, emailHtml, err => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(true);
    });
  });
}
