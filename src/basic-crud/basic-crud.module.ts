import { Module } from '@nestjs/common';
import { BasicCrudController } from './basic-crud.controller';

@Module({
  controllers: [BasicCrudController]
})
export class BasicCrudModule {}
