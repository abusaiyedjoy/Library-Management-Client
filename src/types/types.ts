

export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: "FICTION" | "NON_FICTION" | "SCIENCE" | "HISTORY" | "BIOGRAPHY" | "FANTASY";
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
};

export interface IBorrowedBook {
  book: {
    title: string;
    author: string;
    isbn: string;
  };
  dueDate: string;
  totalQuantity: number;
};

export type BorrowFormData = {
  quantity: number;
  dueDate: string;
};

