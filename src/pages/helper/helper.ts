enum IssueStatus {
  open = "open",
  in_progress = "in_progress",
  solved = "solved",
  closed = "closed"
}

export interface HelperItemInterface {
  id: number;
  author: {name:string};
  subject: string;
  tags: string[];
  created_at: string;
  votes: number;
  views: number;
  content: string;
  status?: IssueStatus; 
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