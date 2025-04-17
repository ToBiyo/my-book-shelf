export interface Book {
  id: string;
  authors: string[];
  title: string;
  bookKey: string;
  coverUrl: string;
}
export interface ReadedBook extends Book {
  rating: number;
}
export interface WishlistBook extends Book {
  priority: number;
}
