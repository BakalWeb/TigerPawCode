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
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit, orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo. Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante. Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat. Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum, nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean elementum pretium justo vitae elementum. Aenean vel velit sem. Etiam hendrerit in est ut mattis.</p>

<p>Pellentesque orci nibh, interdum quis tempus et, porttitor sit amet odio. Nunc aliquam mi dui, sit amet hendrerit sapien rhoncus aliquam. Etiam vitae tincidunt nulla. Pellentesque in fringilla dui. Ut gravida cursus aliquam. Nullam purus erat, interdum nec ante in, molestie finibus lorem. Morbi in ultricies mauris, vitae convallis arcu. Etiam ultrices, ex in malesuada rutrum, nibh nisi faucibus metus, quis tristique elit lacus in arcu. Vivamus auctor luctus magna, sed finibus augue porta a. Cras eleifend felis id massa pulvinar hendrerit.</p>

<p>Donec rutrum purus id ex feugiat, vitae cursus turpis scelerisque. In consequat, felis vel gravida elementum, purus magna malesuada quam, a rhoncus neque mauris quis est. Cras ligula mauris, hendrerit quis nisi quis, auctor sollicitudin lorem. Nulla nec turpis congue, placerat velit non, molestie sapien. Nullam ornare diam nunc. Mauris non scelerisque erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra vitae orci ac lacinia. Aenean tincidunt molestie pulvinar. Nunc sit amet purus sapien. Duis ultrices orci metus, nec ultricies dui placerat in. Nullam fringilla mauris mi, nec porta est lobortis vehicula. Phasellus sit amet felis vehicula, lobortis leo quis, dapibus sapien. Integer ultricies, sapien a luctus dignissim, orci turpis vulputate tortor, tincidunt suscipit diam nibh vitae orci. Curabitur tristique suscipit diam, a imperdiet metus blandit eget.</p>

<p>Nulla in consequat odio. Aliquam ac dolor purus. Sed libero felis, aliquam eu commodo ut, rhoncus non velit. Integer in tellus interdum, sollicitudin mauris id, ornare tortor. In quis dolor sed lacus porta lacinia id ac metus. Donec condimentum ultrices mauris, sit amet rhoncus odio. Vivamus consectetur sagittis purus, eu venenatis lacus tempor in. Vivamus sit amet nisi ipsum. Etiam venenatis tellus arcu, ac varius velit sollicitudin ut. In hac habitasse platea dictumst.</p>

<p>Mauris porta eleifend vehicula. Nulla vehicula, libero at ultrices varius, nunc urna hendrerit felis, non consectetur purus sapien sagittis nisl. Mauris bibendum sem quis tellus sollicitudin, non volutpat augue dignissim. Quisque tempor, libero ac luctus pulvinar, est metus facilisis tortor, egestas sollicitudin eros nisi ac felis. Mauris mollis nisi libero, ac placerat urna vulputate a. Sed interdum mi arcu, sagittis rutrum risus varius non. In sit amet lectus felis. Sed et orci et leo volutpat efficitur non in lectus.</p>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit, orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo. Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante. Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat. Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum, nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean elementum pretium justo vitae elementum. Aenean vel velit sem. Etiam hendrerit in est ut mattis.</p>

<p>Pellentesque orci nibh, interdum quis tempus et, porttitor sit amet odio. Nunc aliquam mi dui, sit amet hendrerit sapien rhoncus aliquam. Etiam vitae tincidunt nulla. Pellentesque in fringilla dui. Ut gravida cursus aliquam. Nullam purus erat, interdum nec ante in, molestie finibus lorem. Morbi in ultricies mauris, vitae convallis arcu. Etiam ultrices, ex in malesuada rutrum, nibh nisi faucibus metus, quis tristique elit lacus in arcu. Vivamus auctor luctus magna, sed finibus augue porta a. Cras eleifend felis id massa pulvinar hendrerit.</p>

<p>Donec rutrum purus id ex feugiat, vitae cursus turpis scelerisque. In consequat, felis vel gravida elementum, purus magna malesuada quam, a rhoncus neque mauris quis est. Cras ligula mauris, hendrerit quis nisi quis, auctor sollicitudin lorem. Nulla nec turpis congue, placerat velit non, molestie sapien. Nullam ornare diam nunc. Mauris non scelerisque erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra vitae orci ac lacinia. Aenean tincidunt molestie pulvinar. Nunc sit amet purus sapien. Duis ultrices orci metus, nec ultricies dui placerat in. Nullam fringilla mauris mi, nec porta est lobortis vehicula. Phasellus sit amet felis vehicula, lobortis leo quis, dapibus sapien. Integer ultricies, sapien a luctus dignissim, orci turpis vulputate tortor, tincidunt suscipit diam nibh vitae orci. Curabitur tristique suscipit diam, a imperdiet metus blandit eget.</p>

<p>Nulla in consequat odio. Aliquam ac dolor purus. Sed libero felis, aliquam eu commodo ut, rhoncus non velit. Integer in tellus interdum, sollicitudin mauris id, ornare tortor. In quis dolor sed lacus porta lacinia id ac metus. Donec condimentum ultrices mauris, sit amet rhoncus odio. Vivamus consectetur sagittis purus, eu venenatis lacus tempor in. Vivamus sit amet nisi ipsum. Etiam venenatis tellus arcu, ac varius velit sollicitudin ut. In hac habitasse platea dictumst.</p>

<p>Mauris porta eleifend vehicula. Nulla vehicula, libero at ultrices varius, nunc urna hendrerit felis, non consectetur purus sapien sagittis nisl. Mauris bibendum sem quis tellus sollicitudin, non volutpat augue dignissim. Quisque tempor, libero ac luctus pulvinar, est metus facilisis tortor, egestas sollicitudin eros nisi ac felis. Mauris mollis nisi libero, ac placerat urna vulputate a. Sed interdum mi arcu, sagittis rutrum risus varius non. In sit amet lectus felis. Sed et orci et leo volutpat efficitur non in lectus.</p>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit, orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo. Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante. Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat. Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum, nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean elementum pretium justo vitae elementum. Aenean vel velit sem. Etiam hendrerit in est ut mattis.</p>

<p>Pellentesque orci nibh, interdum quis tempus et, porttitor sit amet odio. Nunc aliquam mi dui, sit amet hendrerit sapien rhoncus aliquam. Etiam vitae tincidunt nulla. Pellentesque in fringilla dui. Ut gravida cursus aliquam. Nullam purus erat, interdum nec ante in, molestie finibus lorem. Morbi in ultricies mauris, vitae convallis arcu. Etiam ultrices, ex in malesuada rutrum, nibh nisi faucibus metus, quis tristique elit lacus in arcu. Vivamus auctor luctus magna, sed finibus augue porta a. Cras eleifend felis id massa pulvinar hendrerit.</p>

<p>Donec rutrum purus id ex feugiat, vitae cursus turpis scelerisque. In consequat, felis vel gravida elementum, purus magna malesuada quam, a rhoncus neque mauris quis est. Cras ligula mauris, hendrerit quis nisi quis, auctor sollicitudin lorem. Nulla nec turpis congue, placerat velit non, molestie sapien. Nullam ornare diam nunc. Mauris non scelerisque erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra vitae orci ac lacinia. Aenean tincidunt molestie pulvinar. Nunc sit amet purus sapien. Duis ultrices orci metus, nec ultricies dui placerat in. Nullam fringilla mauris mi, nec porta est lobortis vehicula. Phasellus sit amet felis vehicula, lobortis leo quis, dapibus sapien. Integer ultricies, sapien a luctus dignissim, orci turpis vulputate tortor, tincidunt suscipit diam nibh vitae orci. Curabitur tristique suscipit diam, a imperdiet metus blandit eget.</p>

<p>Nulla in consequat odio. Aliquam ac dolor purus. Sed libero felis, aliquam eu commodo ut, rhoncus non velit. Integer in tellus interdum, sollicitudin mauris id, ornare tortor. In quis dolor sed lacus porta lacinia id ac metus. Donec condimentum ultrices mauris, sit amet rhoncus odio. Vivamus consectetur sagittis purus, eu venenatis lacus tempor in. Vivamus sit amet nisi ipsum. Etiam venenatis tellus arcu, ac varius velit sollicitudin ut. In hac habitasse platea dictumst.</p>

<p>Mauris porta eleifend vehicula. Nulla vehicula, libero at ultrices varius, nunc urna hendrerit felis, non consectetur purus sapien sagittis nisl. Mauris bibendum sem quis tellus sollicitudin, non volutpat augue dignissim. Quisque tempor, libero ac luctus pulvinar, est metus facilisis tortor, egestas sollicitudin eros nisi ac felis. Mauris mollis nisi libero, ac placerat urna vulputate a. Sed interdum mi arcu, sagittis rutrum risus varius non. In sit amet lectus felis. Sed et orci et leo volutpat efficitur non in lectus.</p>
`,
    thumbnail: 'https://www.fillmurray.com/g/140/100',
    author: 'Adam Bakal',
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

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit, orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo. Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante. Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat. Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum, nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean elementum pretium justo vitae elementum. Aenean vel velit sem. Etiam hendrerit in est ut mattis.</p>

<p>Pellentesque orci nibh, interdum quis tempus et, porttitor sit amet odio. Nunc aliquam mi dui, sit amet hendrerit sapien rhoncus aliquam. Etiam vitae tincidunt nulla. Pellentesque in fringilla dui. Ut gravida cursus aliquam. Nullam purus erat, interdum nec ante in, molestie finibus lorem. Morbi in ultricies mauris, vitae convallis arcu. Etiam ultrices, ex in malesuada rutrum, nibh nisi faucibus metus, quis tristique elit lacus in arcu. Vivamus auctor luctus magna, sed finibus augue porta a. Cras eleifend felis id massa pulvinar hendrerit.</p>

<p>Donec rutrum purus id ex feugiat, vitae cursus turpis scelerisque. In consequat, felis vel gravida elementum, purus magna malesuada quam, a rhoncus neque mauris quis est. Cras ligula mauris, hendrerit quis nisi quis, auctor sollicitudin lorem. Nulla nec turpis congue, placerat velit non, molestie sapien. Nullam ornare diam nunc. Mauris non scelerisque erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra vitae orci ac lacinia. Aenean tincidunt molestie pulvinar. Nunc sit amet purus sapien. Duis ultrices orci metus, nec ultricies dui placerat in. Nullam fringilla mauris mi, nec porta est lobortis vehicula. Phasellus sit amet felis vehicula, lobortis leo quis, dapibus sapien. Integer ultricies, sapien a luctus dignissim, orci turpis vulputate tortor, tincidunt suscipit diam nibh vitae orci. Curabitur tristique suscipit diam, a imperdiet metus blandit eget.</p>

<p>Nulla in consequat odio. Aliquam ac dolor purus. Sed libero felis, aliquam eu commodo ut, rhoncus non velit. Integer in tellus interdum, sollicitudin mauris id, ornare tortor. In quis dolor sed lacus porta lacinia id ac metus. Donec condimentum ultrices mauris, sit amet rhoncus odio. Vivamus consectetur sagittis purus, eu venenatis lacus tempor in. Vivamus sit amet nisi ipsum. Etiam venenatis tellus arcu, ac varius velit sollicitudin ut. In hac habitasse platea dictumst.</p>

<p>Mauris porta eleifend vehicula. Nulla vehicula, libero at ultrices varius, nunc urna hendrerit felis, non consectetur purus sapien sagittis nisl. Mauris bibendum sem quis tellus sollicitudin, non volutpat augue dignissim. Quisque tempor, libero ac luctus pulvinar, est metus facilisis tortor, egestas sollicitudin eros nisi ac felis. Mauris mollis nisi libero, ac placerat urna vulputate a. Sed interdum mi arcu, sagittis rutrum risus varius non. In sit amet lectus felis. Sed et orci et leo volutpat efficitur non in lectus.</p>
`,
    thumbnail: 'https://via.placeholder.com/150',
    author: 'Jesus',
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
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ligula vitae viverra blandit, orci mauris vestibulum urna, in elementum urna felis posuere orci. Sed sed eros a purus euismod lacinia vitae sit amet nisi. Suspendisse potenti. Duis aliquam nec ipsum id commodo. Vivamus rutrum sem sit amet ligula interdum sagittis. In a tortor eros. In ac neque ante. Donec aliquet orci augue, vitae accumsan nulla ultrices id. Vivamus sagittis eu mi eget consequat. Integer commodo, sem vitae tristique convallis, felis nunc ornare augue, nec hendrerit tellus nibh sit amet augue. Phasellus erat elit, tempus ac suscipit non, luctus et ipsum. Etiam dictum, nibh eget elementum sollicitudin, libero justo cursus leo, sit amet fermentum dolor nisl eu est. Aenean elementum pretium justo vitae elementum. Aenean vel velit sem. Etiam hendrerit in est ut mattis.</p>

<p>Pellentesque orci nibh, interdum quis tempus et, porttitor sit amet odio. Nunc aliquam mi dui, sit amet hendrerit sapien rhoncus aliquam. Etiam vitae tincidunt nulla. Pellentesque in fringilla dui. Ut gravida cursus aliquam. Nullam purus erat, interdum nec ante in, molestie finibus lorem. Morbi in ultricies mauris, vitae convallis arcu. Etiam ultrices, ex in malesuada rutrum, nibh nisi faucibus metus, quis tristique elit lacus in arcu. Vivamus auctor luctus magna, sed finibus augue porta a. Cras eleifend felis id massa pulvinar hendrerit.</p>

<p>Donec rutrum purus id ex feugiat, vitae cursus turpis scelerisque. In consequat, felis vel gravida elementum, purus magna malesuada quam, a rhoncus neque mauris quis est. Cras ligula mauris, hendrerit quis nisi quis, auctor sollicitudin lorem. Nulla nec turpis congue, placerat velit non, molestie sapien. Nullam ornare diam nunc. Mauris non scelerisque erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra vitae orci ac lacinia. Aenean tincidunt molestie pulvinar. Nunc sit amet purus sapien. Duis ultrices orci metus, nec ultricies dui placerat in. Nullam fringilla mauris mi, nec porta est lobortis vehicula. Phasellus sit amet felis vehicula, lobortis leo quis, dapibus sapien. Integer ultricies, sapien a luctus dignissim, orci turpis vulputate tortor, tincidunt suscipit diam nibh vitae orci. Curabitur tristique suscipit diam, a imperdiet metus blandit eget.</p>

<p>Nulla in consequat odio. Aliquam ac dolor purus. Sed libero felis, aliquam eu commodo ut, rhoncus non velit. Integer in tellus interdum, sollicitudin mauris id, ornare tortor. In quis dolor sed lacus porta lacinia id ac metus. Donec condimentum ultrices mauris, sit amet rhoncus odio. Vivamus consectetur sagittis purus, eu venenatis lacus tempor in. Vivamus sit amet nisi ipsum. Etiam venenatis tellus arcu, ac varius velit sollicitudin ut. In hac habitasse platea dictumst.</p>

<p>Mauris porta eleifend vehicula. Nulla vehicula, libero at ultrices varius, nunc urna hendrerit felis, non consectetur purus sapien sagittis nisl. Mauris bibendum sem quis tellus sollicitudin, non volutpat augue dignissim. Quisque tempor, libero ac luctus pulvinar, est metus facilisis tortor, egestas sollicitudin eros nisi ac felis. Mauris mollis nisi libero, ac placerat urna vulputate a. Sed interdum mi arcu, sagittis rutrum risus varius non. In sit amet lectus felis. Sed et orci et leo volutpat efficitur non in lectus.</p>
`,
    thumbnail: 'https://via.placeholder.com/150',
    author: 'Tom Singleton',
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
    author: 'Tom Singleton',
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
    author: 'Tom Singleton',
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
    author: 'Tom Singleton',
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
    author: 'Tom Singleton',
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
    author: 'Tom Singleton',
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
    author: 'Tom Singleton',
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
    author: 'Tom Singleton',
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
    author: 'Tom Singleton',
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
    author: 'Tom Singleton',
    dateLive: new Date()
  }
];
