import { PickType } from '@nestjs/swagger';
import { assignAuth } from './auth.request.dto';

export class LoginRequestDto extends PickType(assignAuth, [
  'email',
  'password',
] as const) {}
