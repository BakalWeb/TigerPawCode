export class BlogItem {
  id: number;
  headline: string;
  shortDescription: string;
  estimatedReadingTime: number; // minutes
  dateCreated: Date;
  status: BlogItemStatus;
  promoted: boolean;
  content: string;
  thumbnail: string;
  author: string;
  dateLive?: Date;
  dateDeleted?: Date;
  tags?: string[];
}

export enum BlogItemStatus {
  draft = 'draft',
  published = 'published',
  deleted = 'deleted'
}
