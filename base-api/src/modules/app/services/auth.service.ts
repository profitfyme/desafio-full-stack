import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtPayload } from 'modules/common/interfaces/jwt-payload.interface';
import { AuthRepository } from '../repositories/auth.repository';
import { AuthCredentialsDto } from '../validators/auth-credentials.dto';
import { SignUpCredentialsDto } from '../validators/signup-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthRepository)
    private authRepository: AuthRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpCredentialsDto: SignUpCredentialsDto) {
    return this.authRepository.signUp(signUpCredentialsDto);
  }

  async signIn(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const email = await this.authRepository.signIn(
      authCredentialsDto,
    );
    if (!email) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload: JwtPayload = { email };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
}
