import { PickType } from '@nestjs/swagger';
import { assignAuth } from './auth.request.dto';

export class NameRequestDto extends PickType(assignAuth, ['name'] as const) {}
