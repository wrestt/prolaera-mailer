import renderer from 'react-test-renderer';
import writeFile from '../../helpers/writeFileHelper';
import activityAssignedEmail from '../builders/activityAssignedBuilder';
import activity from '../tests/json/completeActivity';
import user from '../tests/json/completeUser';

describe('Activity Assigned email', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';

  it('checks snapshot', async () => {
    const emailHtml = await activityAssignedEmail(activity, user, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const activityJson = emailComponent.toJSON();
    expect(activityJson).toMatchSnapshot();
  });

  it('writes an html file', async () => {
    const email = await activityAssignedEmail(activity, user, logoUrl);
    const saved = await writeFile(email, 'activityTest.html');
    expect(saved).toEqual(true);
  });
});
