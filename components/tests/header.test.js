var probe = require('probe-image-size');
import fs from 'fs';
import React from 'react';
import { renderEmail } from 'react-html-email';
import renderer from 'react-test-renderer';
import builderHeader from '../header';

describe('Email Header Template', () => {
  it('it returns the header html', async () => {
    const headerHtml = await builderHeader('http://assets.prolaera.com/NHHCo-lg.png');
    expect(headerHtml).toBeDefined();
  });

  //Use probe to pull image data from URL
  it('it pulls image data from image url ', async () => {
    const saved = await probe('https://assets.prolaera.com/prolaeraLogo_fullText.png');
    expect(saved.width).toEqual(6927);
  });

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

  it('checks that component JSON includes link text', async () => {
    const Header = await builderHeader('http://assets.prolaera.com/NHHCo-lg.png');
    const component = renderer.create(<Header text={'View My Compliance'} />);
    let headerString = JSON.stringify(component.toJSON());
    let containsLinkText = headerString.includes('View My Compliance');
    expect(containsLinkText).toEqual(true);
  });

  it('checks that component JSON includes link URL', async () => {
    const Header = await builderHeader('http://assets.prolaera.com/NHHCo-lg.png');
    const component = renderer.create(<Header link={'https://www.google.com/'} />);
    let headerString = JSON.stringify(component.toJSON());
    let containsUrl = headerString.includes('https://www.google.com/');
    expect(containsUrl).toEqual(true);
  });

  //Use to test image resizing
  it('resizes image successfully #1', async () => {
    const Header = await builderHeader('http://assets.prolaera.com/NHHCo-lg.png');
    const headerComponent = renderer.create(<Header />);
    let headerJson = headerComponent.toJSON();
    expect(headerJson).toMatchSnapshot();
  });
  it('resizes image successfully #2', async () => {
    const Header = await builderHeader('http://assets.prolaera.com/KRS-lg.png');
    const headerComponent = renderer.create(<Header />);
    let headerJson = headerComponent.toJSON();
    expect(headerJson).toMatchSnapshot();
  });
  it('resizes image successfully #3', async () => {
    const Header = await builderHeader('http://assets.prolaera.com/a-lign-lg.png');
    const headerComponent = renderer.create(<Header />);
    let headerJson = headerComponent.toJSON();
    expect(headerJson).toMatchSnapshot();
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
