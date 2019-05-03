var sleep = require('thread-sleep');
class Utility{

	clickElement(page, locator){
		this.waitMyElement(page, locator);
		try {
			let element = page.click(locator).then(() => console.log(`element is clicked: ${locator}`));	
		} catch (e) {
			console.log(e + `element is not clicked : ${locator}`);
			throw new Error(e + ` waiting for element exceeded timeout: ${locator}`);
			  }
	}
	
	selectElement(page, option, value){
		this.waitMyElement(page, option);
		try {
			let element = page.select(option, value).then(() => console.log(`selected element from dropdown : ${value}`));
		} catch (e) {
			console.log(e + `element is not selected by : ${value}`);
			throw new Error(e + `waiting for element exceeded timeout: ${locator}`);
			  }
	}
	
	waitForElement(page, locator){
		let element = null;
		try {
			page.waitFor(locator);
			page.waitForNavigation({"waitUntil" : "load"}).then(() => console.log(`page is loaded: ${page}`));
			page.waitForNavigation({"waitUntil" : "domcontentloaded"}).then(() => console.log(`page is loaded: ${page}`));
			page.waitForNavigation({"waitUntil" : "networkidle0"}).then(() => console.log(`page is loaded: ${page}`));
			element = page.waitForSelector(locator).then(() => console.log(`element is present: ${locator}`));
		} catch (e) {
			throw new Error(e + `waiting for element exceeded timeout: ${locator}`);
			console.log(e + `waiting for element exceeded timeout: ${locator}`);
		}
		return element;
	}
	
	waitMyElement(page, locator){
		let promise = new Promise(function(resolve, reject){
			let element = page.waitForSelector(locator) !== null;
			console.log(element);
			console.log(typeof element);
			if (element) {
				resolve('element is found' + element);
			} else {
				reject('element is not found' + element);
				throw new Error(`waiting for element exceeded timeout: ${locator}`);
			}	
		})
		promise.then(function(fromResolve) {
			console.log('element is ' + fromResolve);			
		}).catch(function(fromReject){
			console.log('element is ' + fromReject);
		})
		
	}
	  
	 async sleep1(milliseconds) {
		  var start = Date.now();
		  var res = sleep(milliseconds);
		  var end = Date.now();
	  }
	 
	 async sleep(ms) {
		  return new Promise(resolve => setTimeout(resolve, ms));
		}
	 
	//  page.mainFrame().waitForXPath('//a[contains(text(), "Left Arrow 1")]').then(() => console.log(`xpath is found`));
	//  page.evaluate(() => {
//		  const xpath = '//a[contains(text(), "Left Arrow 1")]';
//		  const result = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
	//
//		  result.iterateNext().click();
//		});
	  
}
	
module.exports = Utility;
