import { Notification } from './notification';
import { Content } from './content';

describe('Notification', () => {
  it('Should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('New Friend Request'),
      category: 'social',
      recipientId: 'example-Recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
