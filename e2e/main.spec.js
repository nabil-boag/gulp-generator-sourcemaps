'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;
var page = require('./main.po');

chai.use(chaiAsPromised);

module.exports = function () {
  this.Given('a demo app', function (done) {
    done();
  });

  this.When('I load the page', function (done) {
    browser.get('/index.html');
    done();
  });

  this.Then(/^I should see the jumbotron with correct data$/, function (done) {
    expect(page.h1El.getText()).to.eventually.equal('\'Allo, \'Allo!');
    expect(page.imgEl.getAttribute('src')).to.eventually.have.string('assets/images/yeoman.png');
    expect(page.imgEl.getAttribute('alt')).to.eventually.equal('I\'m Yeoman');
    done();
  });

  this.Then(/^I should see a list of more than (\d+) awesome things$/, function (itemNumber, done) {
    expect(page.thumbnailEls.count()).to.eventually.be.at.least(itemNumber);
    done();
  });
};

