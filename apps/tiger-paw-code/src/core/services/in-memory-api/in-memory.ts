import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Users } from './users.data';
import { Blogs } from './blog.data';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService implements InMemoryDbService {
  createDb() {
    const users = Users;
    const blogs = Blogs;
    return {users, blogs};
  }

  constructor() {}
}
