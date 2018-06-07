var gm = require('gm');
var request = require('request');
var probe = require('probe-image-size');
// TODO: Build out simple testing for different urls and text in the header
import fs from 'fs';
import React from 'react';
import { renderEmail } from 'react-html-email';
import renderer from 'react-test-renderer';
import { ServerStyleSheet } from 'styled-components';
import builderHeader from '../header';

const linkUrl = 'https://www.google.com/';
const linkText = 'View My Compliance';
const imageLinks = [
  'http://assets.prolaera.com/uif-sm.png',
  'http://assets.prolaera.com/ua-lg.png',
  'http://assets.prolaera.com/KRS-lg.png',
  'http://assets.prolaera.com/indinero-lg.png',
  'http://assets.prolaera.com/HPG-lg.png',
  'http://assets.prolaera.com/MRZ-lg.png',
  'http://assets.prolaera.com/NHHCo-lg.png',
  'http://assets.prolaera.com/a-lign-lg.png'
];
const imageUrl = getImageLink(imageLinks);

describe('Email with custom header link', () => {
  it('it returns the header html', async () => {
    const headerHtml = await builderHeader(imageUrl);
    expect(headerHtml).toBeDefined();
  });

  //Use probe to pull image data from URL
  it('it pulls image data from image url ', async () => {
    const saved = await probe('https://assets.prolaera.com/prolaeraLogo_fullText.png');
    console.log(saved);
    expect(saved.width).toEqual(6927);
  });

  //Create snapshot of header with custom url and text
  it('it checks snapshot with custom link url and text', async () => {
    const Header = await builderHeader(imageUrl);
    let headerComponent = renderer.create(<Header text={linkText} link={linkUrl} />);
    let headerJson = headerComponent.toJSON();
    expect(headerJson).toMatchSnapshot();
  });
  // Use to save html to a file to make building easier
  it('it writes an html file with custom link url and text', async () => {
    const Header = await builderHeader(imageUrl);
    const sheet = new ServerStyleSheet();
    const headerHtml = renderEmail(<Header src={imageUrl} text={linkText} link={linkUrl} />);
    const styleTags = sheet.getStyleTags();
    const saved = await writeFile(styleTags + headerHtml);
    expect(saved).toEqual(true);
  });

  it('component JSON includes link text', async () => {
    const Header = await builderHeader(imageUrl);
    const component = renderer.create(<Header link={linkUrl} text={linkText} />);
    let headerString = JSON.stringify(component.toJSON());
    let containsLinkText = headerString.includes(linkText);
    expect(containsLinkText).toEqual(true);
  });

  it('component JSON includes link URL', async () => {
    const Header = await builderHeader(imageUrl);
    const component = renderer.create(<Header link={linkUrl} text={linkText} />);
    let headerString = JSON.stringify(component.toJSON());
    let containsUrl = headerString.includes(linkUrl);
    expect(containsUrl).toEqual(true);
  });

  //TESTS FOR IMAGE RESIZING

  it('resizes image successfully #1', async () => {
    const Header = await builderHeader('http://assets.prolaera.com/NHHCo-lg.png');
    const headerComponent = renderer.create(<Header text={linkText} link={linkUrl} />);
    let headerJson = headerComponent.toJSON();
    expect(headerJson).toMatchSnapshot();
  });

  it('resizes image successfully #2', async () => {
    const Header = await builderHeader('http://assets.prolaera.com/KRS-lg.png');
    const headerComponent = renderer.create(<Header text={linkText} link={linkUrl} />);
    let headerJson = headerComponent.toJSON();
    expect(headerJson).toMatchSnapshot();
  });

  it('resizes image successfully #3', async () => {
    const Header = await builderHeader('http://assets.prolaera.com/a-lign-lg.png');
    const headerComponent = renderer.create(<Header text={linkText} link={linkUrl} />);
    let headerJson = headerComponent.toJSON();
    expect(headerJson).toMatchSnapshot();
  });
});

function getImageLink(imageArray) {
  return imageArray[Math.floor(Math.random() * Math.floor(imageArray.length))];
}
function getImageDimensions() {
  console.log('About to probe!');
  probe('https://assets.prolaera.com/prolaeraLogo_fullText.png').then(result => {
    console.log(result);
  });
}

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
// TODO: Build out testing for different logos that properly handles logos with different sizes
// TODO: Build out testing for applying style to the header for mobile device. Centering logo and url herf.
