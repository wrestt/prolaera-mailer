import deliveryHelper from '../deliveryHelper';
import setInnerHtml from '../domHelpers';

describe('domHelper functions', () => {
  it('checks setInnerHtml function is returning parsed data correctly', async () => {
    const testData1 = '<TABLE><tr><td>HELLO</tr></TABL>';
    const parsedData1 = setInnerHtml(testData1);
    const testData2 = '<svg><g/onload=alert(2)//<p>';
    const parsedData2 = setInnerHtml(testData2);
    const testData3 = '<UL><li><A HREF=//google.com>click</UL>';
    const parsedData3 = setInnerHtml(testData3);
    expect(parsedData1).toEqual({ __html: '<table><tbody><tr><td>HELLO</td></tr></tbody></table>' });
    expect(parsedData2).toEqual({ __html: '<svg><g></g></svg>' });
    expect(parsedData3).toEqual({ __html: '<ul><li><a href="//google.com">click</a></li></ul>' });
  });
});

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
