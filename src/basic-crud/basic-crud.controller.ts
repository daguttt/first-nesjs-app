import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('basic-crud')
export class BasicCrudController {
  @Get('')
  get(
    @Query('ejemplo1') example1: string,
    @Query('ejemplo2') example2: string,
    @Query('ejemplo3') example3: string,
  ) {
    return {
      name: 'GET',
      example1,
      example2,
      example3,
    };
  }

  @Post('')
  post(@Body() body: any) {
    console.log(body);
    return { name: 'POST', receivedData: body };
  }

  @Put(':id')
  put(@Param('id') id: string, @Body() body: any) {
    console.log(id);
    return { name: 'PUT', routeParam: id, receivedData: body };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    console.log(id);
    return { name: 'DELETE', id };
  }
}
