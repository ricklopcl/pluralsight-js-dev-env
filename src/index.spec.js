import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('Should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('Should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    // Second parameter for jsdom.env could contain any js that you need to run virtually
    jsdom.env(index, (error, window) => {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Hello World!');
      done();
      window.close();
    });
  });
});

