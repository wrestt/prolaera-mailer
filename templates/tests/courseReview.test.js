import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fs from 'fs';
import React from 'react';
import renderer from 'react-test-renderer';
import CourseReview from '../../components/courseReview/courseReview';
import CourseReviewBuilder from '../courseReviewBuilder';

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
  summary: '<p>This course is the second installation of Tax Prep focused on general tax planning.</p>'
};

describe('CourseReview component html test file', () => {
  it('writes an html file', async () => {
    const courseReviewEmail = await CourseReviewBuilder(
      course,
      'https://assets.prolaera.com/prolaeraLogo_fullText.png'
    );
    const saved = await writeFile(courseReviewEmail);
    expect(saved).toEqual(true);
  });
});

describe('CourseReview component custom input tests', () => {
  it('creates and checks a snapshot of CourseReview html', async () => {
    let reviewHtml = renderer.create(<CourseReview {...course} />);
    let reviewJson = reviewHtml.toJSON();
    expect(reviewJson).toMatchSnapshot();
  });

  it('checks all custom inputs', async () => {
    const wrapper = shallow(<CourseReview {...course} />);
    expect(
      wrapper.contains(
        <p style={{ fontSize: '18px', fontWeight: '300', marginTop: '5px', marginBottom: '5px' }}>
          You have been selected to review Tax Preparation 102.
        </p>
      )
    ).toBe(true);
    expect(
      wrapper.contains(
        <h3>
          Target Audience: <span style={{ fontWeight: '300' }}>Accountants</span>
        </h3>
      )
    ).toBe(true);
    expect(
      wrapper.contains(
        <h3>
          Delivery Method: <span style={{ fontWeight: '300' }}>Group-Live</span>
        </h3>
      )
    ).toBe(true);
    expect(wrapper.contains(<li style={{ fontSize: '18px', fontWeight: '300' }}>Tax Preparation - 1 Hour(s)</li>)).toBe(
      true
    );
    expect(
      wrapper.contains(
        <h3>
          Level: <span style={{ fontWeight: '300' }}>Basic</span>
        </h3>
      )
    ).toBe(true);
    expect(
      wrapper.contains(
        <h3>
          Learning Objectives:
          <div
            style={{ fontSize: '18px', fontWeight: '300' }}
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
          style={{ fontSize: '18px', fontWeight: '300' }}
          dangerouslySetInnerHTML={{ __html: '<p>Read course introduction</p>' }}
        />
      )
    ).toBe(true);
    expect(
      wrapper.contains(
        <div
          style={{ fontSize: '18px', fontWeight: '300' }}
          dangerouslySetInnerHTML={{ __html: '<p>Tax Prep 101</p>' }}
        />
      )
    ).toBe(true);
    expect(
      wrapper.contains(
        <div
          style={{ fontSize: '18px', fontWeight: '300' }}
          dangerouslySetInnerHTML={{
            __html: '<p>This course is the second installation of Tax Prep focused on general tax planning.</p>'
          }}
        />
      )
    ).toBe(true);
    expect(
      wrapper.contains(
        <a
          href="admin/adminProfileId/1234-1234-1234-1234/review"
          className="viewCourseButton"
          style={{
            maxWidth: '200px',
            backgroundColor: '#72C02C',
            padding: '14px 14px 14px 14px',
            color: 'white',
            textDecoration: 'none'
          }}
        >
          View Course
        </a>
      )
    ).toBe(true);
    expect(
      wrapper.contains(
        <a
          href="admin/adminProfileId/1234-1234-1234-1234/review"
          className="viewCourseButton"
          style={{
            maxWidth: '200px',
            backgroundColor: '#72C02C',
            padding: '14px 14px 14px 14px',
            color: 'white',
            textDecoration: 'none'
          }}
        >
          View Course
        </a>
      )
    ).toBe(true);
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
