import { BooksService } from './books.service';
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

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  findAllBooks(
    @Query('title') title: string,
    @Query('author') author: string,
    @Query('category') category: string,
  ) {
    return this.booksService.findAllBooks(title, author, category);
  }

  @Get(':id')
  findBookById(@Param('id') id: string) {
    return this.booksService.findBookById(id);
  }

  @Post()
  createBook(
    @Body('title') title: string,
    @Body('author') author: string,
    @Body('category') category: string,
  ) {
    return this.booksService.create(title, author, category);
  }

  @Put('/:id')
  updateBook(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('author') author: string,
    @Body('category') category: string,
  ) {
    return this.booksService.update(id, title, author, category);
  }

  @Delete('/:id')
  deleteBook(@Param('id') id: string) {
    return this.booksService.delete(id);
  }
}
