import { UserBase } from '../user';

export class UserContract extends UserBase {
  password: string;
  token: string;
  expiry: Date;
}
