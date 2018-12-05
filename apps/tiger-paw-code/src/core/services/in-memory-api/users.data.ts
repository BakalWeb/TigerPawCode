import { User, UserRole } from '@core/models/user';

export const Users: User[] = [
  {
    id: 1,
    created: new Date(),
    lastLoggedIn: new Date(),
    role: UserRole.admin,
    username: 'adamb',
    firstName: 'Adam',
    lastName: 'Bakal',
    password: 'password'
  },
  {
    id: 2,
    created: new Date(),
    lastLoggedIn: new Date(),
    role: UserRole.user,
    username: 'test1',
    firstName: 'Test',
    lastName: '1',
    password: 'password'
  }
];
