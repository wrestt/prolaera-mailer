import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Item } from 'react-html-email';
import renderer from 'react-test-renderer';
import Button from '../button';
import CourseCertificate from '../certificate/courseCertificate';

Enzyme.configure({ adapter: new Adapter() });

const certificate = {
  name: 'Shoe-Tying 101',
  by: 'Elon Musk',
  delivery_method: 1,
  first: 'Jeff',
  body: 'This is a test body! It should match.',
  button1Text: 'View Certificate',
  button2Text: 'Complete Evaluation',
  button1Link: '#',
  button2Link: '#'
};

describe('CourseCertificate component', () => {
  it('should return default values if none provided', async () => {
    let certificate = renderer.create(<CourseCertificate />);
    let certString = JSON.stringify(certificate.toJSON());
    let containsDefault = certString.includes('View Certificate');
    expect(containsDefault).toEqual(true);
  });

  it('checks all custom inputs', async () => {
    const wrapper = shallow(<CourseCertificate {...certificate} />);
    expect(
      wrapper.contains(
        <Item>
          <div
            style={{
              maxWidth: '300px',
              marginLeft: 'auto',
              marginRight: 'auto',
              border: '1px solid lightgray',
              borderRadius: '8px',
              background: 'linear-gradient(to bottom right, #ffd11a, #fff0b3, #ffd633)',
              boxShadow: '1px 1px 8px darkgray'
            }}
          >
            <h3 style={{ marginBottom: '5px' }}>Shoe-Tying 101</h3>
            <h6 style={{ marginTop: '0px' }}>Instructor: Elon Musk (Group-Live)</h6>
          </div>
        </Item>
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <Item>
          <p>This is a test body! It should match.</p>
        </Item>
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <Item>
          <Button text={'View Certificate'} link={'#'} />
          <hr style={{ width: '45px' }} />
          <Button text={'Complete Evaluation'} link={'#'} />
        </Item>
      )
    ).toBe(true);
  });
});
