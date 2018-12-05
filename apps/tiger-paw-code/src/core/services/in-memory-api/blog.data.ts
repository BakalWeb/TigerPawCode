import { BlogItem, BlogItemStatus } from '@core/models/blog-item';

export const blogs: BlogItem[] = [
  {
    id: 1,
    headline: 'Working with Angular',
    shortDescription: 'Tips on working with Angular',
    estimatedReadingTime: 10,
    dateCreated: new Date(),
    promoted: false,
    status: BlogItemStatus.published,
    content: `
    <p>Loads of content.</p>
    <p>And stuff.</p>
`,
    dateLive: new Date()
  },
  {
    id: 1,
    headline: 'Working at Dataphiles',
    shortDescription: 'Tips on working at Dataphiles',
    estimatedReadingTime: 240,
    dateCreated: new Date(),
    promoted: false,
    status: BlogItemStatus.published,
    content: `
    <p>Loads of coping strategies.</p>
    <p>And stuff.</p>
`,
    dateLive: new Date()
  }
];
