import userComplaince from './templates/builders/userCompliance';

const handler = async (event, context) => {
  const { body } = event;
  switch (body.template) {
    case 'userComplaince':
      const email = await userComplaince(body.completeCompliance, body.imageUrl);
      return context.succed(email);
    default:
      context.fail('Invaild Template');
      break;
  }
};

export default handler;
