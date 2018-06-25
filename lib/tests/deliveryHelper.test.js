import deliveryHelper from '../deliveryHelper';

describe('deliveryHelper function', () => {
  it('checks that deliveryHelper returns the correct output', () => {
    expect(deliveryHelper(0)).toEqual('Self-Study');
    expect(deliveryHelper(1)).toEqual('Group-Live');
    expect(deliveryHelper(2)).toEqual('Group-Internet / Webinar');
    expect(deliveryHelper(3)).toEqual('Publication');
    expect(deliveryHelper(4)).toEqual('Instruction');
    expect(deliveryHelper(5)).toEqual('University');
    expect(deliveryHelper(6)).toEqual('Self-Study (Non-Interactive)');
    expect(deliveryHelper(7)).toEqual('Carry Over');
    expect(deliveryHelper()).toEqual('Group-Live');
  });
});
