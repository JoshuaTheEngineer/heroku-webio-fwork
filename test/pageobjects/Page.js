module.exports = class Page {
  constructor() {
    this.title = 'My Page';
  }

  open(path) {
    browser.url(`https://the-internet.herokuapp.com/${path}`);
  }
}
