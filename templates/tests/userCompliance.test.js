import userCompliance from '../userCompliance';
import completeCompliance from './completeCompliance';
import fs from 'fs';

const logoUrl =
  'https://gallery.mailchimp.com/eb930e30a15249a18d658c183/images/8913446e-ebf0-42fc-9518-3422589d5ed8.png';
describe('Email compliance Report', () => {
  it('it returns an emails html', async () => {
    const emailHtml = userCompliance(completeCompliance, logoUrl);
    expect(emailHtml).toBeDefined();
  });
  // Use to save html to a file to make building easier
  it('it writes an html file', async () => {
    const emailHtml = userCompliance(completeCompliance, logoUrl);
    const saved = await writeFile(emailHtml);
    expect(saved).toEqual(true);
  });
});

async function writeFile(emailHtml) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${__dirname}/test.html`, emailHtml, err => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(true);
    });
  });
}
