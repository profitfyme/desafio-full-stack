import {
  MinLength,
  IsString,
  MaxLength,
  Matches,
  IsOptional,
  IsNotEmpty,
  IsEmail,
} from 'class-validator';

export class SignUpCredentialsDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(50)
  firstname: string;

  @IsOptional()
  @IsString()
  @MinLength(4)
  @MaxLength(100)
  lastname: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MaxLength(150)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
}
