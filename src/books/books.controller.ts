import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  sayHelloWorld() {
    return 'Hello World!';
  }

  @Get(':id')
  sayHelloWorldWithId(@Param('id') id: string) {
    return `Hello World with id: ${id}`;
  }

  @Post()
  createBook(@Body() payload: any) {
    return {
      message: 'Book created',
      payload,
    };
  }
}
