import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../components/button';
import CourseInfo from '../../components/course/courseInfo';

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
  footer: 'Log in below'
};
const headerText = "You've been assigned a new course, " + `${course.name}`;
const buttonText = 'Log In';

describe('CourseInfo component custom input tests', () => {
  it('creates and checks a snapshot of CourseInfo html', async () => {
    let courseHtml = renderer.create(<CourseInfo {...course} />);
    let courseJson = courseHtml.toJSON();
    expect(courseJson).toMatchSnapshot();
  });

  it('checks all custom inputs', async () => {
    const wrapper = shallow(<CourseInfo {...course} headerProps={headerText} buttonProps={buttonText} />);
    expect(wrapper.contains(<p>You've been assigned a new course, Tax Preparation 102</p>)).toBe(true);
    expect(
      wrapper.contains(
        <h3>
          Target Audience: <span style={{ fontWeight: 'normal' }}>Accountants</span>
        </h3>
      )
    ).toBe(true);
    expect(
      wrapper.contains(
        <h3>
          Delivery Method: <span style={{ fontWeight: 'normal' }}>Group-Live</span>
        </h3>
      )
    ).toBe(true);
    expect(
      wrapper.contains(<li style={{ fontSize: '18px', fontWeight: 'normal' }}>Tax Preparation - 1 Hour(s)</li>)
    ).toBe(true);
    expect(
      wrapper.contains(
        <h3>
          Level: <span style={{ fontWeight: 'normal' }}>Basic</span>
        </h3>
      )
    ).toBe(true);
    expect(
      wrapper.contains(
        <h3>
          Learning Objectives:
          <div
            style={{ fontSize: '18px', fontWeight: 'normal' }}
            dangerouslySetInnerHTML={{
              __html: '<ol><li>Learn about tax planning</li><li>Apply skills</li><li>Review tax planning</li></ol>'
            }}
          />
        </h3>
      )
    ).toBe(true);
    expect(
      wrapper.contains(
        <div
          style={{ fontSize: '18px', fontWeight: 'normal' }}
          dangerouslySetInnerHTML={{ __html: '<p>Read course introduction</p>' }}
        />
      )
    ).toBe(true);
    expect(
      wrapper.contains(
        <div
          style={{ fontSize: '18px', fontWeight: 'normal' }}
          dangerouslySetInnerHTML={{ __html: '<p>Tax Prep 101</p>' }}
        />
      )
    ).toBe(true);
    expect(
      wrapper.contains(
        <div
          style={{ fontSize: '18px', fontWeight: 'normal' }}
          dangerouslySetInnerHTML={{
            __html: '<p>This course is the second installation of Tax Prep focused on general tax planning.</p>'
          }}
        />
      )
    ).toBe(true);
    expect(wrapper.contains(<Button text={'Log In'} />)).toBe(true);
  });
});
