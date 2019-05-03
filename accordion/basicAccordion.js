
const Utility = require('../utility/utility');
module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  console.log('VIEWPORT > ' + vp.label);
  const elementToCapture = '#example-accordion-1 ul.co-accordion';
  const option = '.co-form__field selecto';
  const value = 'example-accordion-1';
  const util = new Utility();
  util.selectElement(page, option, value);
  await util.sleep(2000);
};