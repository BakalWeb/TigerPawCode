import { User } from '@core/models/user';
import { UserRole } from '@core/models/enums/user-role.enum';

export const Users: User[] = [
  {
    id: 1,
    dateCreated: new Date(),
    lastModified: new Date(),
    role: UserRole.admin,
    username: 'adamb',
    firstName: 'Adam',
    lastName: 'Bakal',
    password: 'password',
    email: 'bakalweb@gmail.com',
    subscribed: true,
    userDeleted: false,
    fullName: 'Adam Bakal'
  },
  {
    id: 2,
    dateCreated: new Date(),
    lastModified: new Date(),
    role: UserRole.user,
    username: 'test1',
    firstName: 'Test',
    lastName: '1',
    password: 'password',
    email: 'bakal.web@gmail.com',
    subscribed: false,
    userDeleted: false,
    fullName: 'Test 1'
  }
];
