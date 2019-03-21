import { User } from '../user';
import { UserProfile } from '../user-profile';
import { UserContract } from './user.contract';

export class ProfileContract {
  userContract: UserContract;
  userProfile: UserProfile;
}
