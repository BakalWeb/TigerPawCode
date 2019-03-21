import { User } from './user';

abstract class UserProfileBase {
  id: number;
  userId: number;
  aboutMe: string;
  avatar: any;
}

export class UserProfile extends UserProfileBase {}
