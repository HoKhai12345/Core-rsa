import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CorePaginationConfig} from "../../../models/pagination.model";

// export interface PaginationConfig {
//   totalItems: number;
//   itemsPerPage: number;
//   currentPage: number;
//   maxPages?: number;
//   showFirstLast?: boolean;
//   showPageNumbers?: boolean;
//   showItemsPerPage?: boolean;
//   showTotal?: boolean;
// }

@Component({
  selector: 'app-core-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class CorePaginationComponent implements OnInit {
  @Input() config: CorePaginationConfig = {
    totalItems: 100,
    itemsPerPage: 10,
    currentPage: 1,
    maxPages: 5,
    showFirstLast: true,
    showPageNumbers: true,
    showItemsPerPage: true,
    showTotal: true
  };

  @Output() pageChange = new EventEmitter<number>();
  @Output() itemsPerPageChange = new EventEmitter<number>();

  @Input() listItemPerPage: number[] = [5, 10, 20, 50, 100];
  isDropdownOpen = false;
  totalPages = 0;
  visiblePages: number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.calculatePagination();
  }

  ngOnChanges(): void {
    this.calculatePagination();
  }

  calculatePagination(): void {
    this.totalPages = Math.ceil(this.config.totalItems / this.config.itemsPerPage);
    this.generateVisiblePages();
  }

  generateVisiblePages(): void {
    this.visiblePages = [];
    console.log("totalPages", this.totalPages);
    const maxPages = this.config.maxPages || 5;

    if (this.totalPages <= maxPages) {
      // Hiển thị tất cả các trang
      for (let i = 1; i <= this.totalPages; i++) {
        this.visiblePages.push(i);
      }
    } else {
      // Hiển thị một phần các trang
      const half = Math.floor(maxPages / 2);
      let start = Math.max(1, this.config.currentPage - half);
      let end = Math.min(this.totalPages, start + maxPages - 1);

      if (end - start + 1 < maxPages) {
        start = Math.max(1, end - maxPages + 1);
      }

      for (let i = start; i <= end; i++) {
        this.visiblePages.push(i);
      }
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.config.currentPage) {
      this.config.currentPage = page;
      this.pageChange.emit(page);
      this.generateVisiblePages();
    }
  }

  goToFirst(): void {
    this.goToPage(1);
  }

  goToLast(): void {
    this.goToPage(this.totalPages);
  }

  goToPrevious(): void {
    this.goToPage(this.config.currentPage - 1);
  }

  goToNext(): void {
    this.goToPage(this.config.currentPage + 1);
  }

  setItemsPerPage(limit: number): void {
    this.isDropdownOpen = false;
    this.config.itemsPerPage = limit;
    this.config.currentPage = 1; // Reset về trang đầu
    this.itemsPerPageChange.emit(limit);
    this.calculatePagination();
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  get startIndex(): number {
    return (this.config.currentPage - 1) * this.config.itemsPerPage + 1;
  }

  get endIndex(): number {
    return Math.min(this.config.currentPage * this.config.itemsPerPage, this.config.totalItems);
  }

  isFirstPage(): boolean {
    return this.config.currentPage === 1;
  }

  isLastPage(): boolean {
    return this.config.currentPage === this.totalPages;
  }

  hasNextPage(): boolean {
    return this.config.currentPage < this.totalPages;
  }

  hasPreviousPage(): boolean {
    return this.config.currentPage > 1;
  }
}
