
const Utility = require('../utility/utility');
module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  const option = '.co-form__field select';
  const value = 'example-accordion-2';
  const util = new Utility();
  util.selectElement(page, option, value);
  await util.sleep(2000);
};