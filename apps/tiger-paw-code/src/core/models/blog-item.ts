export class BlogItem {
  id: number;
  headline: string;
  shortDescription: string;
  estimatedReadingTime: number;
  dateCreated: Date;
  status: BlogItemStatus;
  promoted: boolean;
  content: string;
  dateLive?: Date;
}

export enum BlogItemStatus {
  draft,
  published,
  deleted
}
