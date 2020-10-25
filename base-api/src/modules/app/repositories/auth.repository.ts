import { Repository, EntityRepository } from 'typeorm';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { User } from 'modules/database/entities/user.entity';
import { SignUpCredentialsDto } from '../validators/signup-credentials.dto';
import { AuthCredentialsDto } from '../validators/auth-credentials.dto';

@EntityRepository(User)
export class AuthRepository extends Repository<User> {
  async signUp(signUpCredentialsDto: SignUpCredentialsDto): Promise<void> {
    const { firstname, lastname, email, password } = signUpCredentialsDto;
    try {
      const user = new User();
      user.firstname = firstname;
      user.lastname = lastname;
      user.email = email;
      user.salt = await bcrypt.genSalt();
      user.passwordhash = await user.hashPassword(password, user.salt);
      await user.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Email already exists');
      }
      throw new InternalServerErrorException();
    }
  }

  async signIn(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<string | null> {
    const { email, password } = authCredentialsDto;

    const user = await this.findOne({ email });

    if (user && (await user.validatePassword(password))) {
      return user.email;
    }
    return null;
  }
}
