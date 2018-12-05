export class User {
  id: number;
  username: string;
  role: UserRole;
  lastLoggedIn: Date;
  created: Date;
  firstName: string;
  lastName: string;
  password: string;
}

export enum UserRole {
  admin,
  user,
}
