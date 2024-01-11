import { Content } from '@app/entities/content';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipentNotification } from './count-recipient-notifications';
import { Notification } from '@app/entities/notification';

describe('Count Recipietn Notification Notification', () => {
  it('shoud be able to count recipient a notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipentNotification = new CountRecipentNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('Nova Solicitação de amziade'),
        category: 'social',
        recipientId: 'recipient-1',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('Nova Solicitação de amziade'),
        category: 'social',
        recipientId: 'recipient-1',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('Nova Solicitação de amziade'),
        category: 'social',
        recipientId: 'recipient-2',
      }),
    );

    const { count } = await countRecipentNotification.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
