import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';


/* Unit test
----------------------------------- */
describe('First test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});


/* DOM testing
----------------------------------- */
describe('index.html', () => {
  it('should have h1 that says Users', (done) => {  // use done param because async test
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function (err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Users");
      done();
      window.close();
    });
  });
});
