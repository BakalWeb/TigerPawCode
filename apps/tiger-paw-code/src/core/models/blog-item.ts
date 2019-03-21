abstract class BlogItemBase {
  id: number;
  headline: string;
  shortDescription: string;
  estimatedReadingTime: number; // minutes
  dateCreated: Date;
  status: BlogItemStatus;
  promoted: boolean;
  content: string;
  thumbnail: string;
  userId: number;
  dateLive?: Date;
  tags?: string[];
  dateDeleted?: Date;
}

export class BlogItem extends BlogItemBase {
}

export class BlogItemForm extends BlogItemBase {
  toggleDelete?: boolean;
}

export enum BlogItemStatus {
  draft = 'draft',
  published = 'published',
  deleted = 'deleted'
}
