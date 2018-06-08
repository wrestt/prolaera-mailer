import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fs from 'fs';
import React from 'react';
import { renderEmail } from 'react-html-email';
import renderer from 'react-test-renderer';
import builderHeader, { Header } from '../header';

Enzyme.configure({ adapter: new Adapter() });

describe('Email Header Template', () => {
  //Create snapshot of header with custom url and text
  it('it checks snapshot with custom link url and text', async () => {
    const Header = await builderHeader('http://assets.prolaera.com/NHHCo-lg.png');
    let headerComponent = renderer.create(<Header text={'View My Compliance'} link={'https://www.google.com/'} />);
    let headerJson = headerComponent.toJSON();
    expect(headerJson).toMatchSnapshot();
  });

  // Use to save html to a file to make building easier
  it('it writes an html file with custom link url and text', async () => {
    const Header = await builderHeader('http://assets.prolaera.com/NHHCo-lg.png');
    const headerHtml = renderEmail(<Header text={'View My Compliance'} link={'https://www.google.com/'} />);
    const saved = await writeFile(headerHtml);
    expect(saved).toEqual(true);
  });

  //Use to test image resizing
  it('resizes image successfully NHHco Logo', async () => {
    const Header = await builderHeader('http://assets.prolaera.com/NHHCo-lg.png');
    const headerComponent = renderer.create(<Header />);
    let headerJson = headerComponent.toJSON();
    expect(headerJson).toMatchSnapshot();
  });
  it('resizes image successfully KRS logo', async () => {
    const Header = await builderHeader('http://assets.prolaera.com/KRS-lg.png');
    const headerComponent = renderer.create(<Header />);
    let headerJson = headerComponent.toJSON();
    expect(headerJson).toMatchSnapshot();
  });
  it('resizes image successfully a-lign logo', async () => {
    const Header = await builderHeader('http://assets.prolaera.com/a-lign-lg.png');
    const headerComponent = renderer.create(<Header />);
    let headerJson = headerComponent.toJSON();
    expect(headerJson).toMatchSnapshot();
  });
});

//Enzyme Tests for custom link url and link text
describe('<Header />', () => {
  it('checks that Header html contains logo', async () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.headerLogo').exists()).toEqual(true);
  });
  it('checks that component html includes link text', async () => {
    const wrapper = shallow(<Header text={'View My Compliance'} />);
    expect(wrapper.contains(<a href="https://app.prolaera.com"> View My Compliance → </a>)).toBe(true);
  });
  it('checks that component html includes link url', async () => {
    const wrapper = shallow(<Header text={'View My Compliance'} link={'https://www.google.com/'} />);
    expect(wrapper.contains(<a href="https://www.google.com/"> View My Compliance → </a>)).toBe(true);
  });
});

async function writeFile(emailHtml) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${__dirname}/test.html`, emailHtml, err => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(true);
    });
  });
}
