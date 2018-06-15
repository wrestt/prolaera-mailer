import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fs from 'fs';
import React from 'react';
import renderer from 'react-test-renderer';
import CourseReview from '../../components/courseReview/courseReview';
import CourseReviewBuilder from '../courseReviewBuilder';
import completeCourse from './completeCourse';

Enzyme.configure({ adapter: new Adapter() });

describe('CourseReview component html test file', () => {
  it('writes an html file', async () => {
    const courseReviewEmail = await CourseReviewBuilder(
      completeCourse,
      'https://assets.prolaera.com/prolaeraLogo_fullText.png'
    );
    const saved = await writeFile(courseReviewEmail);
    expect(saved).toEqual(true);
  });
});

describe('CourseReview component tests', () => {
  it('creates and checks a snapshot of CourseReview html', async () => {
    let reviewHtml = renderer.create(
      <CourseReview courseName={'Example Course'} adminProfileId={'exampleAdminProfileId'} />
    );
    let reviewJson = reviewHtml.toJSON();
    expect(reviewJson).toMatchSnapshot();
  });

  it('checks default CourseReview html', async () => {
    const wrapper = shallow(<CourseReview />);
    expect(wrapper.contains(<h1>Course Information:</h1>)).toBe(true);
  });

  it('checks CourseReview html with custom course name', async () => {
    const wrapper = shallow(<CourseReview />);
    expect(
      wrapper.contains(
        <p style={{ fontSize: '18px', fontWeight: '300', marginTop: '5px', marginBottom: '5px' }}>
          You have been selected to review ASC 606 (Self-Study).
        </p>
      )
    ).toBe(true);
  });

  it('checks CourseReview html with custom admin profile ID', async () => {
    const wrapper = shallow(<CourseReview adminProfileId={'testAdminProfileId'} />);
    expect(
      wrapper.contains(
        <a
          href="admin/testAdminProfileId/6ef58c8e-6ab7-4798-bd21-1c8fa8bcb137"
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
    const wrapper = shallow(<CourseReview courseId={'testCourseId'} />);
    expect(
      wrapper.contains(
        <a
          href="admin/adminProfileId/testCourseId"
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
