require('./firstExport');
require('./secondExport');

console.log('are the two `db` instances the same object?');
if (global.firstExport === global.secondExport) {
  console.log('yes');
} else {
  console.log('no');
}
