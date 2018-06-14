import fs from 'fs';
import CourseReviewBuilder from '../courseReviewBuilder';
import completeCourse from './completeCourse';

describe('registration Email', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';

  it('writes an html file', async () => {
    const courseReviewEmail = await CourseReviewBuilder(completeCourse, logoUrl);
    const saved = await writeFile(courseReviewEmail);
    expect(saved).toEqual(true);
  });
});

async function writeFile(emailHtml) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${__dirname}/courseReviewTest.html`, emailHtml, err => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(true);
    });
  });
}
