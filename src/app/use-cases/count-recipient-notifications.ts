import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface CountRecipentNotificationRequest {
  recipientId: string;
}

interface CountRecipentNotificationResponse {
  count: number;
}

@Injectable()
export class CountRecipentNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: CountRecipentNotificationRequest,
  ): Promise<CountRecipentNotificationResponse> {
    const { recipientId } = request;

    const count =
      await this.notificationsRepository.countManyByRecipientId(recipientId);

    return { count };
  }
}
