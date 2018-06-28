function deliveryHelper(num) {
  const deliveryDict = {
    0: 'Self-Study',
    1: 'Group-Live',
    2: 'Group-Internet / Webinar',
    3: 'Publication',
    4: 'Instruction',
    5: 'University',
    6: 'Self-Study (Non-Interactive)',
    7: 'Carry Over'
  };
  return deliveryDict[num] || 'Group-Live';
}

export default deliveryHelper;
