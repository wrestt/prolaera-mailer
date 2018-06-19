import fs from 'fs';
import React from 'react';
import renderer from 'react-test-renderer';
import EventInfo from '../../components/registration/eventInfo';
import eventInvite from '../../templates/tests/eventInvite';
import invitationEmail from '../eventInvitationBuilder';
import setInnerHtml from '../../lib/domHelpers';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter()
});

const event = {
  course_name: 'Fraud in the Digital Age',
  courseAudience: 'CPAs',
  delivery_date: '2018-06-14T09:24:00.000Z',
  delivery_end_date: '2018-06-15T04:24:00.000Z',
  delivery_location: 'The White House, 1600 Pennsylvania Avenue Northwest, Washington, DC, USA',
  delivery_method: 1,
  hours: [
    {
      credits: 12,
      subject_area: 'Auditing'
    },
    {
      credits: 4,
      subject_area: 'Uncategorized'
    },
    {
      credits: 0.1,
      subject_area: 'Other'
    }
  ],
  level: 'Advanced',
  objectives: '<ul><li>Objective 1</li><li>Objective 2</li><li>Objective 3</li><li>Objective 3 + 1</li></ul>',
  prep: '<div><u>None needed.&nbsp;</u></div>',
  prerequisites:
    '<ul><li>Familiarity with fraud detection methods</li><li>Deep-seated hatred for fraud</li><li>Love of avoiding fraud</li><li>Two hundred thousand dollars</li></ul>',
  price: 200000,
  summary:
    '<p><b>This course is about</b>&nbsp;detecting fraud. On top of that, this course is also about many other things. Here is a list of some of the things that will be covered in this course.&nbsp;</p><ul><li>Stuff</li><li>Things</li><li>Topics</li></ul><p>Please bring a pen and paper, and laptop. If you dont have any of those, tough luck. < /p><div><span style="background-color: rgb(85, 98, 113); color: rgb(123, 136, 152); font-family: &quot;Mercury SSm A&quot;, &quot;Mercury SSm B&quot;, Georgia, Times, &quot;Times New Roman&quot;, &quot;Microsoft YaHei New&quot;, &quot;Microsoft Yahei&quot;, 微软雅黑, 宋体, SimSun, STXihei, 华文细黑, serif; font-size: 1.1875em;"><br></span > < /div>'
};

describe('invitation Email', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';

  it('checks snapshot', async () => {
    const emailHtml = await invitationEmail(eventInvite, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const registrationJson = emailComponent.toJSON();
    expect(registrationJson).toMatchSnapshot();
  });

  it('writes an html file', async () => {
    const email = await invitationEmail(eventInvite, logoUrl);
    const saved = await writeFile(email);
    expect(saved).toEqual(true);
  });

  it('creates snapshot with JSON data passed in', async () => {
    const email = await invitationEmail(eventInvite, logoUrl);
    const emailHtml = await writeFile(email);
    expect(emailHtml).toMatchSnapshot();
  });

  it('provides default email output values if none are provided', async () => {
    let eventInfo = renderer.create(<EventInfo />);
    let emailString = JSON.stringify(eventInfo.toJSON());
    let containsDefaultInfo = emailString.includes('Summary:', ' ');
    expect(containsDefaultInfo).toEqual(true);
  });

  it('checks all custom inputs', async () => {
    const wrapper = shallow(<EventInfo {...event} />);
    expect(
      wrapper.contains(
        <h4 align="center">
          <em>Fraud in the Digital Age (Group-Live)</em>
        </h4>
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <h4>
          Start Time: <span style={{ fontWeight: 'normal' }}>June 14, 2018</span>
        </h4>
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <h4>
          End Time: <span style={{ fontWeight: 'normal' }}>June 15, 2018</span>
        </h4>
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <ul>
          <li style={{ padding: '5px' }}>Auditing - 12 Hour(s)</li>
          <li style={{ padding: '5px' }}>Uncategorized - 4 Hour(s)</li>
          <li style={{ padding: '5px' }}>Other - 0.1 Hour(s)</li>
        </ul>
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <span style={{ fontWeight: 'normal' }}>
          The White House, 1600 Pennsylvania Avenue Northwest, Washington, DC, USA
        </span>
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <h4>
          Delivery Method: <span style={{ fontWeight: 'normal' }}>Group-Live</span>
        </h4>
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <h4>
          Price: <span style={{ fontWeight: 'normal' }}>$200000.00</span>
        </h4>
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <h4>
          Target Audience: <span style={{ fontWeight: 'normal' }}>CPAs</span>
        </h4>
      )
    ).toBe(true);

    expect(
      wrapper.contains(<div dangerouslySetInnerHTML={setInnerHtml('<div><u>None needed.&nbsp;</u></div>')} />)
    ).toBe(true);

    expect(
      wrapper.contains(
        <div
          dangerouslySetInnerHTML={setInnerHtml(
            '<ul><li>Familiarity with fraud detection methods</li><li>Deep-seated hatred for fraud</li><li>Love of avoiding fraud</li><li>Two hundred thousand dollars</li></ul>'
          )}
        />
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <div
          dangerouslySetInnerHTML={setInnerHtml(
            '<ul><li>Objective 1</li><li>Objective 2</li><li>Objective 3</li><li>Objective 3 + 1</li></ul>'
          )}
        />
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <span style={{ fontWeight: 'normal' }}>
          <div
            dangerouslySetInnerHTML={setInnerHtml(
              '<p><b>This course is about</b>&nbsp;detecting fraud. On top of that, this course is also about many other things. Here is a list of some of the things that will be covered in this course.&nbsp;</p><ul><li>Stuff</li><li>Things</li><li>Topics</li></ul><p>Please bring a pen and paper, and laptop. If you dont have any of those, tough luck. < /p><div><span style="background-color: rgb(85, 98, 113); color: rgb(123, 136, 152); font-family: &quot;Mercury SSm A&quot;, &quot;Mercury SSm B&quot;, Georgia, Times, &quot;Times New Roman&quot;, &quot;Microsoft YaHei New&quot;, &quot;Microsoft Yahei&quot;, 微软雅黑, 宋体, SimSun, STXihei, 华文细黑, serif; font-size: 1.1875em;"><br></span > < /div>'
            )}
          />
        </span>
      )
    ).toBe(true);
  });
});

async function writeFile(emailHtml) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${__dirname}/inviteTest.html`, emailHtml, err => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(true);
    });
  });
}
