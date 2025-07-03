export interface IBook {
  title: string;
  subtitle: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  status: 'Available' | 'Unavailable'; 
}

export interface AddBookFormInputs {
  bookTitle: string;
  author: string;
  genre: string;
  publishYear: number;
  isbn: string;
  totalCopies: number;
  description: string;
}