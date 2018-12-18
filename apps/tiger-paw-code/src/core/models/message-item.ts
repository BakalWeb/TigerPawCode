export class MessageItem {
  id: number;
  recipientId: number;
  senderId?: number; // could this be empty for an organisation sent message?
  subject: string;
  content: string;
  dateCreated: Date;
  dateRead: Date;
}
