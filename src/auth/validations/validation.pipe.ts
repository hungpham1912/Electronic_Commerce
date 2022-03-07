import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { Type } from '@nestjs/passport';

import { Test } from 'src/users/dto/create-use.dto';


export interface ArgumentMetadata {
  type: 'body' | 'query' | 'param' | 'custom';
  metatype?: Type <unknown>;
  data?: string;
}
@Injectable()
export class ValidationPipeNew implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("🚀 ~ file: validation.pipe.ts ~ line 15 ~ ValidationPipeNew ~ value", value)
    return value;
  }
}
