import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import renderer from 'react-test-renderer';
import GenericInfo from '../../components/generic/GenericInfo';
import writeFile from '../../lib/writeFileHelper';
import firmInviteBuilder from '../builders/firmInviteBuilder';

Enzyme.configure({ adapter: new Adapter() });
const user = { email: 'test@email.com' };
const company = { company_name: 'Test CPA Firm' };
const headerText = <p>You've been added to {company.company_name} on Prolaera</p>;
const bodyText = (
  <div>
    <p>Your account is waiting for you and there are only a couple quick steps to complete.</p>
    <ol>
      <li>Click the button below to register your account.</li>
      <li>On the registration page simply enter a password for your new account and click "Register".</li>
    </ol>
  </div>
);
const footerText = <p>That's it! You're ready to explore the new tools and resources you have access to.</p>;

describe('Firm Invite component', () => {
  it('creates and checks snapshot of FirmInvite component html', async () => {
    let inviteHtml = renderer.create(
      <GenericInfo header={headerText} body={bodyText} footer={footerText} email={user.email} />
    );
    let inviteJson = inviteHtml.toJSON();
    expect(inviteJson).toMatchSnapshot();
  });
});

describe('create html test file', () => {
  it('writes an html file to firmInviteTest.html', async () => {
    const firmInviteEmail = await firmInviteBuilder(
      user,
      company,
      'https://assets.prolaera.com/prolaeraLogo_fullText.png'
    );
    const saved = await writeFile(firmInviteEmail, 'firmInviteTest.html');
    expect(saved).toEqual(true);
  });
});
