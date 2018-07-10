import { ProtractorTestProjectPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('protractor-test-project App', () => {
  

  beforeAll(() => {
    browser.ignoreSynchronization = true;
  });

  it('should navigate to google', () => {
    browser.get('https://www.google.fr');
    browser.wait(() => element(by.id('lst-ib')).isPresent(), 10000, 'too long');
    element(by.id('lst-ib')).sendKeys("protractor issue waitForAngularEnabled");
  });
  
  describe("Return to app", () => {
	beforeAll(() => {
		browser.ignoreSynchronization = false;
	});
	it("should return to app", () => {
		// i return to my app
		browser.get('/');
		let titleElement = element(by.id("title"));
		expect(titleElement.isPresent()).toBe(true);
	});
  });
});
