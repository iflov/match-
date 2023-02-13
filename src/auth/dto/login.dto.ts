import { PickType } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

export class LoginCredentialDto extends PickType(User, [
  'id',
  'email',
  'password',
] as const) {}
