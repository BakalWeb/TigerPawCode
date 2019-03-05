import { User } from './user';

abstract class UserProfileBase {
  id: number;
  userId: number;
  aboutMe: string;
}

export class UserProfile extends UserProfileBase {}
