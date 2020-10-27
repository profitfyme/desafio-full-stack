import { User } from '../interfaces/models/user.interface';
import apiService, { ApiService } from './api';

export class UserService {
  constructor(private apiService: ApiService) {}

  public save(model: User, password: string, passwordConfirmation: string) {
    return this.apiService.post('/v1/auth/signup', {
      ...model,
      password
    });
  }

  // public login(email: string, password: string) {
  //   return this.apiService.login('/v1/auth/signin', { email, password });
  // }
}

const userService = new UserService(apiService);
export default userService;
