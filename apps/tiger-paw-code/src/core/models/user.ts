import { UserRole } from './enums/user-role.enum';

export abstract class UserBase {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  subscribed: boolean;
  dateCreated: Date;
  lastModified: Date;
  fullName: string;
}

export class User extends UserBase {
  password: string;
  role: UserRole;
  userDeleted: boolean;
}

