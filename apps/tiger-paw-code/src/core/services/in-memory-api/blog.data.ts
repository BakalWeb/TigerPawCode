import { BlogItem, BlogItemStatus } from '@core/models/blog-item';

export const Blogs: BlogItem[] = [
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
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit,
    orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia
     vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo.
     Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante.
      Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat.
      Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit
      tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum,
       nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean
       elementum pretium justo vitae elementum. Aenean vel velit sem.
     Etiam hendrerit in est ut mattis.</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit,
     orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia
      vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo.
      Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante.
       Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat.
       Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit
       tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum,
        nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean
        elementum pretium justo vitae elementum. Aenean vel velit sem.
      Etiam hendrerit in est ut mattis.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit,
      orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia
       vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo.
       Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante.
        Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat.
        Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit
        tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum,
         nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean
         elementum pretium justo vitae elementum. Aenean vel velit sem.
       Etiam hendrerit in est ut mattis.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit,
       orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia
        vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo.
        Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante.
         Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat.
         Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit
         tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum,
          nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean
          elementum pretium justo vitae elementum. Aenean vel velit sem.
        Etiam hendrerit in est ut mattis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit,
        orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia
         vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo.
         Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante.
          Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat.
          Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit
          tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum,
           nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean
           elementum pretium justo vitae elementum. Aenean vel velit sem.
         Etiam hendrerit in est ut mattis.</p>
`,
    thumbnail: 'https://www.fillmurray.com/g/140/100',
    userId: 1,
    dateLive: new Date()
  },
  {
    id: 2,
    headline: 'Working at Dataphiles',
    shortDescription: 'Tips on working at Dataphiles',
    estimatedReadingTime: 240,
    dateCreated: new Date(),
    promoted: false,
    status: BlogItemStatus.published,
    content: `
    <p>Loads of coping strategies.</p>
    <p>And stuff.</p>

    <p>Loads of content.</p>
    <p>And stuff.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit,
    orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia
     vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo.
     Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante.
      Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat.
      Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit
      tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum,
       nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean
       elementum pretium justo vitae elementum. Aenean vel velit sem.
     Etiam hendrerit in est ut mattis.</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit,
     orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia
      vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo.
      Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante.
       Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat.
       Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit
       tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum,
        nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean
        elementum pretium justo vitae elementum. Aenean vel velit sem.
      Etiam hendrerit in est ut mattis.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit,
      orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia
       vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo.
       Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante.
        Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat.
        Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit
        tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum,
         nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean
         elementum pretium justo vitae elementum. Aenean vel velit sem.
       Etiam hendrerit in est ut mattis.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit,
       orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia
        vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo.
        Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante.
         Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat.
         Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit
         tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum,
          nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean
          elementum pretium justo vitae elementum. Aenean vel velit sem.
        Etiam hendrerit in est ut mattis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit,
        orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia
         vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo.
         Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante.
          Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat.
          Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit
          tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum,
           nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean
           elementum pretium justo vitae elementum. Aenean vel velit sem.
         Etiam hendrerit in est ut mattis.</p>
`,
    thumbnail: 'https://via.placeholder.com/150',
    userId: 1,
    dateLive: new Date()
  },
  {
    id: 3,
    headline: 'Toms Top 10',
    shortDescription: 'Toms most wisest of words',
    estimatedReadingTime: 40,
    dateCreated: new Date(),
    promoted: false,
    status: BlogItemStatus.published,
    content: `
    <p>Loads of stuff and tingalings.</p>
    <p>And stuff.</p>

    <p>Loads of content.</p>
    <p>And stuff.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit,
    orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia
     vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo.
     Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante.
      Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat.
      Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit
      tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum,
       nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean
       elementum pretium justo vitae elementum. Aenean vel velit sem.
     Etiam hendrerit in est ut mattis.</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit,
     orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia
      vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo.
      Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante.
       Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat.
       Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit
       tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum,
        nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean
        elementum pretium justo vitae elementum. Aenean vel velit sem.
      Etiam hendrerit in est ut mattis.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit,
      orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia
       vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo.
       Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante.
        Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat.
        Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit
        tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum,
         nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean
         elementum pretium justo vitae elementum. Aenean vel velit sem.
       Etiam hendrerit in est ut mattis.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit,
       orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia
        vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo.
        Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante.
         Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat.
         Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit
         tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum,
          nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean
          elementum pretium justo vitae elementum. Aenean vel velit sem.
        Etiam hendrerit in est ut mattis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit,
        orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia
         vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo.
         Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante.
          Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat.
          Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit
          tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum,
           nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean
           elementum pretium justo vitae elementum. Aenean vel velit sem.
         Etiam hendrerit in est ut mattis.</p>
`,
    thumbnail: 'https://via.placeholder.com/150',
    userId: 1,
    dateLive: new Date()
  },
  {
    id: 4,
    headline: 'Toms Top 10',
    shortDescription: 'Toms most wisest of words',
    estimatedReadingTime: 40,
    dateCreated: new Date(),
    promoted: false,
    status: BlogItemStatus.published,
    content: `
    <p>Loads of stuff and tingalings.</p>
`,
    thumbnail: 'https://via.placeholder.com/150',
    userId: 1,
    dateLive: new Date()
  },
  {
    id: 5,
    headline: 'Toms Top 10',
    shortDescription: 'Toms most wisest of words',
    estimatedReadingTime: 40,
    dateCreated: new Date(),
    promoted: false,
    status: BlogItemStatus.published,
    content: `
    <p>Loads of stuff and tingalings.</p>
`,
    thumbnail: 'https://via.placeholder.com/150',
    userId: 1,
    dateLive: new Date()
  },
  {
    id: 6,
    headline: 'Toms Top 10',
    shortDescription: 'Toms most wisest of words',
    estimatedReadingTime: 40,
    dateCreated: new Date(),
    promoted: false,
    status: BlogItemStatus.published,
    content: `
    <p>Loads of stuff and tingalings.</p>
`,
    thumbnail: 'https://via.placeholder.com/150',
    userId: 1,
    dateLive: new Date()
  },
  {
    id: 7,
    headline: 'Toms Top 10',
    shortDescription: 'Toms most wisest of words',
    estimatedReadingTime: 40,
    dateCreated: new Date(),
    promoted: false,
    status: BlogItemStatus.published,
    content: `
    <p>Loads of stuff and tingalings.</p>
`,
    thumbnail: 'https://via.placeholder.com/150',
    userId: 1,
    dateLive: new Date()
  },
  {
    id: 8,
    headline: 'Toms Top 10',
    shortDescription: 'Toms most wisest of words',
    estimatedReadingTime: 40,
    dateCreated: new Date(),
    promoted: false,
    status: BlogItemStatus.published,
    content: `
    <p>Loads of stuff and tingalings.</p>
`,
    thumbnail: 'https://via.placeholder.com/150',
    userId: 1,
    dateLive: new Date()
  },
  {
    id: 9,
    headline: 'Toms Top 10',
    shortDescription: 'Toms most wisest of words',
    estimatedReadingTime: 40,
    dateCreated: new Date(),
    promoted: false,
    status: BlogItemStatus.published,
    content: `
    <p>Loads of stuff and tingalings.</p>
`,
    thumbnail: 'https://via.placeholder.com/150',
    userId: 1,
    dateLive: new Date()
  },
  {
    id: 10,
    headline: 'Toms Top 10',
    shortDescription: 'Toms most wisest of words',
    estimatedReadingTime: 40,
    dateCreated: new Date(),
    promoted: false,
    status: BlogItemStatus.published,
    content: `
    <p>Loads of stuff and tingalings.</p>
`,
    thumbnail: 'https://via.placeholder.com/150',
    userId: 1,
    dateLive: new Date()
  },
  {
    id: 11,
    headline: 'Toms Top 10',
    shortDescription: 'Toms most wisest of words',
    estimatedReadingTime: 40,
    dateCreated: new Date(),
    promoted: false,
    status: BlogItemStatus.published,
    content: `
    <p>Loads of stuff and tingalings.</p>
`,
    thumbnail: 'https://via.placeholder.com/150',
    userId: 1,
    dateLive: new Date()
  },
  {
    id: 12,
    headline: 'Toms Top 10',
    shortDescription: 'Toms most wisest of words',
    estimatedReadingTime: 40,
    dateCreated: new Date(),
    promoted: false,
    status: BlogItemStatus.published,
    content: `
    <p>Loads of stuff and tingalings.</p>
`,
    thumbnail: 'https://via.placeholder.com/150',
    userId: 1,
    dateLive: new Date()
  }
];
