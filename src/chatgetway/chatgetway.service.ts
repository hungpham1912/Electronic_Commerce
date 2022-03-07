import { Injectable } from '@nestjs/common';
import { CreateChatgetwayDto } from './dto/create-chatgetway.dto';
import { UpdateChatgetwayDto } from './dto/update-chatgetway.dto';

@Injectable()
export class ChatgetwayService {
  create(createChatgetwayDto: CreateChatgetwayDto) {
    return 'This action adds a new chatgetway';
  }

  findAll() {
    return `This action returns all chatgetway`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chatgetway`;
  }

  update(id: number, updateChatgetwayDto: UpdateChatgetwayDto) {
    return `This action updates a #${id} chatgetway`;
  }

  remove(id: number) {
    return `This action removes a #${id} chatgetway`;
  }
}
