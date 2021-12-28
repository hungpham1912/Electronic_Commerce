import { Injectable } from '@nestjs/common';
import { CreatePipeDto } from './dto/create-pipe.dto';
import { UpdatePipeDto } from './dto/update-pipe.dto';

@Injectable()
export class PipesService {
  create(createPipeDto: CreatePipeDto) {
    return 'This action adds a new pipe';
  }

  findAll() {
    return `This action returns all pipes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pipe`;
  }

  update(id: number, updatePipeDto: UpdatePipeDto) {
    return `This action updates a #${id} pipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} pipe`;
  }
}
