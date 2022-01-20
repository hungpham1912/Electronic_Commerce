import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChatgetwayService } from './chatgetway.service';
import { CreateChatgetwayDto } from './dto/create-chatgetway.dto';
import { UpdateChatgetwayDto } from './dto/update-chatgetway.dto';

@Controller('chatgetway')
export class ChatgetwayController {
  constructor(private readonly chatgetwayService: ChatgetwayService) {}

  @Post()
  create(@Body() createChatgetwayDto: CreateChatgetwayDto) {
    return this.chatgetwayService.create(createChatgetwayDto);
  }

  @Get()
  findAll() {
    return this.chatgetwayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatgetwayService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChatgetwayDto: UpdateChatgetwayDto) {
    return this.chatgetwayService.update(+id, updateChatgetwayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatgetwayService.remove(+id);
  }
}
