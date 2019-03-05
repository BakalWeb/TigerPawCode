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
}

export class User extends UserBase {
  fullName: string;
  password: string;
  role: UserRole;
  userDeleted: boolean;
}

