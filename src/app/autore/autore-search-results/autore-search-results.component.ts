import { Component, OnInit, Input } from '@angular/core';
import { Autore } from '../autore';

@Component({
  selector: 'app-autore-search-results',
  templateUrl: './autore-search-results.component.html',
  styleUrls: ['./autore-search-results.component.css']
})
export class AutoreSearchResultsComponent implements OnInit {
  @Input() searchResultInput: Autore[];

  constructor() { }

  ngOnInit(): void {
  }

}
