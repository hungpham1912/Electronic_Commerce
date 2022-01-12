import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from 'joi';
import { Test } from 'src/users/dto/create-use.dto';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema<Test>) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const  error  = this.schema.validate(value).error;
    if (error) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }
}
