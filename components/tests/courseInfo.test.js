import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import renderer from 'react-test-renderer';
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

describe('CourseReview component custom input tests', () => {
  it('creates and checks a snapshot of CourseReview html', async () => {
    let reviewHtml = renderer.create(<CourseInfo {...course} />);
    let reviewJson = reviewHtml.toJSON();
    expect(reviewJson).toMatchSnapshot();
  });

  it('checks all custom inputs', async () => {
    const wrapper = shallow(<CourseInfo {...course} />);
    expect(
      wrapper.contains(
        <div style={{ fontSize: '18px', fontWeight: 'normal', marginTop: '5px' }}>
          Your course Tax Preparation 101 is ready for review
        </div>
      )
    ).toBe(true);
    expect(wrapper.contains(<div style={{ fontSize: '18px', fontWeight: 'normal' }}>Log in below</div>)).toBe(true);
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
  });
});
