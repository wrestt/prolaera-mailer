'use strict';

var _deliveryHelper = require('../deliveryHelper');

var _deliveryHelper2 = _interopRequireDefault(_deliveryHelper);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

describe('deliveryHelper function', function() {
  it('checks that deliveryHelper returns the correct output', function() {
    expect((0, _deliveryHelper2.default)(0)).toEqual('Self-Study');
    expect((0, _deliveryHelper2.default)(1)).toEqual('Group-Live');
    expect((0, _deliveryHelper2.default)(2)).toEqual('Group-Internet / Webinar');
    expect((0, _deliveryHelper2.default)(3)).toEqual('Publication');
    expect((0, _deliveryHelper2.default)(4)).toEqual('Instruction');
    expect((0, _deliveryHelper2.default)(5)).toEqual('University');
    expect((0, _deliveryHelper2.default)(6)).toEqual('Self-Study (Non-Interactive)');
    expect((0, _deliveryHelper2.default)(7)).toEqual('Carry Over');
    expect((0, _deliveryHelper2.default)()).toEqual('Group-Live');
  });
});
