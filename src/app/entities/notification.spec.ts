import { Notification } from './notification';
import { Content } from './content';

describe('Notification', () => {
  it('shoud be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova Solicitação de amziade'),
      category: 'social',
      recipientId: 'example-recipent-id',
    });

    expect(notification).toBeTruthy();
  });
});
