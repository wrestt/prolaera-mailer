import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../components/button';
import CourseInfo from '../../components/course/courseInfo';
import setInnerHtml from '../../helpers/domHelpers';

Enzyme.configure({ adapter: new Adapter() });

const course = {
  by: 'John Doe',
  course_id: '1234-1234-1234-1234',
  courseAudience: 'Accountants',
  delivery_method: 1,
  hours: [
    {
      credits: 1,
      subject_area: 'Tax Preparation'
    }
  ],
  level: 'Basic',
  name: 'Tax Preparation 102',
  objectives: '<ol><li>Learn about tax planning</li><li>Apply skills</li><li>Review tax planning</li></ol>',
  prep: '<p>Read course introduction</p>',
  prerequisites: '<p>Tax Prep 101</p>',
  summary: '<p>This course is the second installation of Tax Prep focused on general tax planning.</p>',
  header: 'Your course Tax Preparation 101 is ready for review',
  footer: 'Log in below',
  buttonText: 'Test Button Text',
  adminProfileId: 'testAdminProfileId',
  buttonLink: 'testButtonLink'
};

describe('CourseInfo component custom input tests', () => {
  it('creates and checks a snapshot of CourseInfo html', async () => {
    let courseHtml = renderer.create(<CourseInfo {...course} />);
    let courseJson = courseHtml.toJSON();
    expect(courseJson).toMatchSnapshot();
  });

  it('checks all custom inputs', async () => {
    const wrapper = shallow(<CourseInfo {...course} />);
    expect(wrapper.contains(<em>Tax Preparation 102 (Group-Live)</em>)).toBe(true);
    expect(
      wrapper.contains(
        <h4>
          By: <span style={{ fontWeight: 'normal' }}>John Doe</span>
        </h4>
      )
    ).toBe(true);

    expect(wrapper.contains(<li style={{ fontWeight: 'normal' }}>Tax Preparation - 1 Hour(s)</li>)).toBe(true);

    expect(
      wrapper.contains(
        <h4>
          Price: <span style={{ fontWeight: 'normal' }}>Free</span>
        </h4>
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <h4>
          Target Audience: <span style={{ fontWeight: 'normal' }}>Accountants</span>
        </h4>
      )
    ).toBe(true);
    expect(
      wrapper.contains(
        <div
          className="innerHtmlStyles"
          style={{ fontWeight: 'normal' }}
          dangerouslySetInnerHTML={setInnerHtml('<p>Read course introduction</p>')}
        />
      )
    ).toBe(true);
    expect(
      wrapper.contains(
        <div
          className="innerHtmlStyles"
          style={{ fontWeight: 'normal' }}
          dangerouslySetInnerHTML={setInnerHtml('<p>Tax Prep 101</p>')}
        />
      )
    ).toBe(true);
    expect(
      wrapper.contains(
        <h4>
          Level: <span style={{ fontWeight: 'normal' }}>Basic</span>
        </h4>
      )
    ).toBe(true);
    expect(
      wrapper.contains(
        <div
          className="innerHtmlStyles"
          style={{ fontWeight: 'normal' }}
          dangerouslySetInnerHTML={setInnerHtml(
            '<ol><li>Learn about tax planning</li><li>Apply skills</li><li>Review tax planning</li></ol>'
          )}
        />
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <div
          className="innerHtmlStyles"
          style={{ fontWeight: 'normal' }}
          dangerouslySetInnerHTML={setInnerHtml(
            '<p>This course is the second installation of Tax Prep focused on general tax planning.</p>'
          )}
        />
      )
    ).toBe(true);
    expect(
      wrapper.contains(
        <Button
          text={'Test Button Text'}
          link={'https://app.prolaera.com/#/admin/testAdminProfileId/testButtonLink/review'}
        />
      )
    ).toBe(true);
  });
});
