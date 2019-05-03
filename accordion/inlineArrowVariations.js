
const Utility = require('../utility/utility');
module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  const option = '.co-form__field select';
  const value = 'example-accordion-3';
  const util = new Utility();
  util.selectElement(page, option, value);
  const inlineArrow = '#example-accordion-3 > div:nth-child(11) > ul > li:nth-child(1) > a';
  util.clickElement(page, inlineArrow);
  const inline_content = '.co-accordion--inline-arrow > li:nth-child(1)';
  util.waitForElement(page, inline_content);
  await util.sleep(2000);
};
