import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Autore } from '../autore';

@Component({
  selector: 'app-autore-search-results',
  templateUrl: './autore-search-results.component.html',
  styleUrls: ['./autore-search-results.component.css']
})
export class AutoreSearchResultsComponent implements OnInit {
  @Input() searchResultInput: Autore[];
  @Input() searchResultInputCount: number;
  @Input() currentPageInput: number;
  @Input() itemsPerPageInput: number;

  @Output() nextPage = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  pageChanged(nextPageFromInput: number) {
    this.nextPage.emit(nextPageFromInput);
  }

}
