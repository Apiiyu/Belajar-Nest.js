import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BooksService {
  private books: any[] = [];

  findAllBooks(title: string, author: string, category: string): any[] {
    if (title || author || category) {
      return this.books.filter(
        (book) =>
          book.title === title ||
          book.author === author ||
          book.category === category,
      );
    }

    return this.books;
  }

  findBookById(id: string): any {
    const book = this.books.find((book) => book.id === id);
    if (!book) return new NotFoundException('Book not found');

    return book;
  }

  create(title: string, author: string, category: string) {
    this.books.push({ id: uuidv4(), title, author, category });
    return this.books;
  }

  update(id: string, title: string, author: string, category: string) {
    const book = this.books.find((book) => book.id === id);
    if (!book) return new NotFoundException('Book not found');

    book.title = title;
    book.author = author;
    book.category = category;
    return book;
  }

  delete(id: string) {
    const index = this.books.findIndex((book) => book.id === id);
    if (index === -1) return new NotFoundException('Book not found');

    this.books.splice(index, 1);
    return {
      message: 'Book deleted successfully',
      data: this.books,
    };
  }
}
