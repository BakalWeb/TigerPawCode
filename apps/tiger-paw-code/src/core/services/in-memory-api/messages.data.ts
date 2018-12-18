import { MessageItem } from '@core/models/message-item';

export const Messages: MessageItem[] = [
  {
    id: 1,
    dateCreated: new Date(),
    dateRead: null,
    recipientId: 1,
    senderId: null,
    subject: 'Test 1',
    content: `
    <p>Content 1</p>
    `
  },
  {
    id: 2,
    dateCreated: new Date(),
    dateRead: null,
    recipientId: 1,
    senderId: null,
    subject: 'Test 2',
    content: `
    <p>Content 2</p>
    `
  },
  {
    id: 3,
    dateCreated: new Date(),
    dateRead: new Date(),
    recipientId: 1,
    senderId: null,
    subject: 'Test 2',
    content: `
    <p>Content 2</p>
    `
  },
];
