import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('basic-crud')
export class BasicCrudController {
  @Get('')
  get() {
    return { name: 'GET' };
  }

  @Post('')
  post(@Body() body: any) {
    console.log(body);
    return { name: 'POST' };
  }

  @Put(':id')
  put(@Param('id') id: string) {
    console.log(id);
    return { name: 'PUT' };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    console.log(id);
    return { name: 'DELETE' };
  }
}
