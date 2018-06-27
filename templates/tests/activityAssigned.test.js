import renderer from 'react-test-renderer';
import writeFile from '../../lib/writeFileHelper';
import activityAssignedEmail from '../builders/activityAssignedBuilder';
import activity from '../tests/json/completeActivity';

describe('Activity Assigned email', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';

  it('checks snapshot', async () => {
    const emailHtml = await activityAssignedEmail(activity, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const activityJson = emailComponent.toJSON();
    expect(activityJson).toMatchSnapshot();
  });

  it('writes an html file', async () => {
    const email = await activityAssignedEmail(activity, logoUrl);
    const saved = await writeFile(email, 'activityTest.html');
    expect(saved).toEqual(true);
  });
});
