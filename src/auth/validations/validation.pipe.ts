import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

import { Test } from 'src/users/dto/create-use.dto';

@Injectable()
export class ValidationPipeNew implements PipeTransform {
  transform(value, metadata) {
    const ds = new Test()
    // if(Object.keys(value).length!=Object.keys(Test).length){
    //   throw new BadRequestException('Validation failed');
    // }
  
    console.log(Object.keys(value).length)

    return value;
  }
}
