export interface CorePaginationConfig {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  maxPages?: number;
  showFirstLast?: boolean;
  showPageNumbers?: boolean;
  showItemsPerPage?: boolean;
  showTotal?: boolean;
}
