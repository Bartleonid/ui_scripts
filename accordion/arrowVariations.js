var sleep = require('thread-sleep');

const Utility = require('../utility/utility');
module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  const option = '.co-form__field select';
  const value = 'example-accordion-3';
  const util = new Utility();
  util.selectElement(page, option, value);
  const leftArrow = '#example-accordion-3 > div:nth-child(6) > ul > li:nth-child(1) > a';
  util.clickElement(page, leftArrow);
  const left_content = '.co-accordion--left-arrow > li:nth-child(1)';
  util.waitForElement(page, left_content); 
  await util.sleep(2000);	  
};
