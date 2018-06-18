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

  it('checks default html', async () => {
    const wrapper = shallow(<CourseReview {...course} />);
    expect(
      wrapper.contains(
        <p style={{ fontSize: '18px', fontWeight: '300', marginTop: '5px', marginBottom: '5px' }}>
          You have been selected to review Tax Preparation 102.
        </p>
      )
    ).toBe(true);
  });

  it('checks html with custom course name', async () => {
    const wrapper = shallow(<CourseReview {...course} name={'Test Course Name'} />);
    expect(
      wrapper.contains(
        <p style={{ fontSize: '18px', fontWeight: '300', marginTop: '5px', marginBottom: '5px' }}>
          You have been selected to review Test Course Name.
        </p>
      )
    ).toBe(true);
  });

  it('checks html with custom course audience', async () => {
    const wrapper = shallow(<CourseReview {...course} courseAudience={'Test Course Audience'} />);
    expect(
      wrapper.contains(
        <h3>
          Target Audience: <span style={{ fontWeight: '300' }}>Test Course Audience</span>
        </h3>
      )
    ).toBe(true);
  });

  it('checks html with custom course delivery method', async () => {
    const wrapper = shallow(<CourseReview {...course} delivery_method={2} />);
    expect(
      wrapper.contains(
        <h3>
          Delivery Method: <span style={{ fontWeight: '300' }}>Group-Internet / Webinar</span>
        </h3>
      )
    ).toBe(true);
  });

  it('checks html with custom course credit number and subject area', async () => {
    const wrapper = shallow(<CourseReview {...course} hours={[{ credits: 4, subject_area: 'Test Subject Area' }]} />);
    expect(
      wrapper.contains(<li style={{ fontSize: '18px', fontWeight: '300' }}>Test Subject Area - 4 Hour(s)</li>)
    ).toBe(true);
  });

  it('checks html with custom course level', async () => {
    const wrapper = shallow(<CourseReview {...course} level={'Advanced'} />);
    expect(
      wrapper.contains(
        <h3>
          Level: <span style={{ fontWeight: '300' }}>Advanced</span>
        </h3>
      )
    ).toBe(true);
  });

  it('checks html with custom course objectives', async () => {
    const wrapper = shallow(<CourseReview {...course} objectives={'<ol><li>First</li><li>Second</li></ol>'} />);
    expect(
      wrapper.contains(
        <h3>
          Learning Objectives:
          <div
            style={{ fontSize: '18px', fontWeight: '300' }}
            dangerouslySetInnerHTML={{ __html: '<ol><li>First</li><li>Second</li></ol>' }}
          />
        </h3>
      )
    ).toBe(true);
  });

  it('checks html with custom prep', async () => {
    const wrapper = shallow(<CourseReview {...course} prep={'<p>Test Prep</p>'} />);
    expect(
      wrapper.contains(
        <div style={{ fontSize: '18px', fontWeight: '300' }} dangerouslySetInnerHTML={{ __html: '<p>Test Prep</p>' }} />
      )
    ).toBe(true);
  });

  it('checks html with custom prerequisites', async () => {
    const wrapper = shallow(<CourseReview {...course} prerequisites={'<p>Test Prereqs</p>'} />);
    expect(
      wrapper.contains(
        <div
          style={{ fontSize: '18px', fontWeight: '300' }}
          dangerouslySetInnerHTML={{ __html: '<p>Test Prereqs</p>' }}
        />
      )
    ).toBe(true);
  });

  it('checks html with custom summary', async () => {
    const wrapper = shallow(<CourseReview {...course} summary={'<p>Test Summary</p>'} />);
    expect(
      wrapper.contains(
        <div
          style={{ fontSize: '18px', fontWeight: '300' }}
          dangerouslySetInnerHTML={{ __html: '<p>Test Summary</p>' }}
        />
      )
    ).toBe(true);
  });

  it('checks CourseReview html with custom admin profile ID', async () => {
    const wrapper = shallow(<CourseReview {...course} adminProfileId={'testAdminProfileId'} />);
    expect(
      wrapper.contains(
        <a
          href="admin/testAdminProfileId/1234-1234-1234-1234/review"
          className="viewCourseButton"
          style={{
            maxWidth: '200px',
            backgroundColor: '#68B63E',
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
  it('checks CourseReview html with custom course ID', async () => {
    const wrapper = shallow(<CourseReview {...course} course_id={'testCourseId'} />);
    expect(
      wrapper.contains(
        <a
          href="admin/adminProfileId/testCourseId/review"
          className="viewCourseButton"
          style={{
            maxWidth: '200px',
            backgroundColor: '#68B63E',
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
