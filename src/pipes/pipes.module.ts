import { Module } from '@nestjs/common';
import { PipesService } from './pipes.service';
import { PipesController } from './pipes.controller';

@Module({
  controllers: [PipesController],
  providers: [PipesService]
})
export class PipesModule {}
