import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicCrudModule } from './basic-crud/basic-crud.module';

@Module({
  imports: [BasicCrudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
