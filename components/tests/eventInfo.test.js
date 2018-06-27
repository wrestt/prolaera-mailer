import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import renderer from 'react-test-renderer';
import setInnerHtml from '../../lib/domHelpers';
import Event from '../../templates/tests/json/event';
import EventInfo from '../event/eventInfo';

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
  event_id: 'd342572d-e149-48fa-83c5-e2730bbb1b76',
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

describe('EventInfo Component', () => {
  it('provides default email output values if none are provided', async () => {
    let eventInfo = renderer.create(<EventInfo />);
    let emailString = JSON.stringify(eventInfo.toJSON());
    let containsDefaultInfo = emailString.includes('Summary:', ' ');
    expect(containsDefaultInfo).toEqual(true);
  });

  it('successfully parses Event JSON data', async () => {
    const eventInfo = renderer.create(<EventInfo course_name={Event.course_name} />);
    let eventInfoString = JSON.stringify(eventInfo.toJSON());
    let containsCourseName = eventInfoString.includes('ASC 606 Update Training');
    expect(containsCourseName).toEqual(true);
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
        <ul style={{ marginTop: '10px' }}>
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
      wrapper.contains(
        <div
          className="innerHtmlStyles"
          dangerouslySetInnerHTML={setInnerHtml('<div><u>None needed.&nbsp;</u></div>')}
        />
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <div
          className="innerHtmlStyles"
          dangerouslySetInnerHTML={setInnerHtml(
            '<ul><li>Familiarity with fraud detection methods</li><li>Deep-seated hatred for fraud</li><li>Love of avoiding fraud</li><li>Two hundred thousand dollars</li></ul>'
          )}
        />
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <div
          className="innerHtmlStyles"
          dangerouslySetInnerHTML={setInnerHtml(
            '<ul><li>Objective 1</li><li>Objective 2</li><li>Objective 3</li><li>Objective 3 + 1</li></ul>'
          )}
        />
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <div
          className="innerHtmlStyles"
          dangerouslySetInnerHTML={setInnerHtml(
            '<p><b>This course is about</b>&nbsp;detecting fraud. On top of that, this course is also about many other things. Here is a list of some of the things that will be covered in this course.&nbsp;</p><ul><li>Stuff</li><li>Things</li><li>Topics</li></ul><p>Please bring a pen and paper, and laptop. If you dont have any of those, tough luck. < /p><div><span style="background-color: rgb(85, 98, 113); color: rgb(123, 136, 152); font-family: &quot;Mercury SSm A&quot;, &quot;Mercury SSm B&quot;, Georgia, Times, &quot;Times New Roman&quot;, &quot;Microsoft YaHei New&quot;, &quot;Microsoft Yahei&quot;, 微软雅黑, 宋体, SimSun, STXihei, 华文细黑, serif; font-size: 1.1875em;"><br></span > < /div>'
          )}
        />
      )
    ).toBe(true);
  });
});
