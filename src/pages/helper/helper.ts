export interface HelperItemInterface {
  id: number;
  username: string;
  title: string;
  tags: string[];
  created_at: string;
  votes: number;
  views: number;
}
export interface UseDataModifiersReturn<T> {
  dataCurrentPage: T[];
  goToPage: (pageNumber: number) => void;
  goToNextPage: () => void;
  goToPrevPage: () => void;
  totalPages: number;
  page: number;
  dataLength: number;
}
export type SortConfig = {
  type: 'date' | 'number' | 'string';
  property: string;
  direction: -1 | 1;
} | null | undefined;

export type SearchConfig = {
  query: string;
  param?: string | undefined;
} | null | undefined;