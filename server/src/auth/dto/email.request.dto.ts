import { PickType } from '@nestjs/swagger';
import { assignAuth } from './auth.request.dto';

export class EmailRequestDto extends PickType(assignAuth, ['email'] as const) {}
