import { Component, OnInit } from '@angular/core';
import { Autore } from '../autore';
import { AutoreService } from '../autore.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-autore-search',
  templateUrl: './autore-search.component.html',
  styleUrls: ['./autore-search.component.css']
})
export class AutoreSearchComponent implements OnInit {
  autoreSearch: Autore;
  errorMessage: string = '';
  searchResults: Autore[] = [];
  autoreCount: number = 0;
  //TODO rimuovere
  private offset: number = 0;
  private max: number = 5;

  constructor(private autoreService: AutoreService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(): void {
    this.autoreSearch = new Autore();
    this.autoreSearch.inAttivita = null;
  }

  resetResults(): void {
    this.searchResults = [];
  }

  search(autoreForm: NgForm): void {
    console.log('sub ' + JSON.stringify(this.autoreSearch));
    const queryParams: Map<string, string> = new Map<string, string>(Object.entries(this.autoreSearch));
    queryParams.set('offset', this.offset.toString());
    queryParams.set('max', this.max.toString());
    this.autoreService.searchAutori(queryParams).subscribe(
      searchResultsItem => {
        this.searchResults = searchResultsItem.autoreList;
        this.autoreCount = searchResultsItem.autoreCount;
        this.errorMessage = '';
      },
      err => {
        this.errorMessage = err;
        this.searchResults = [];
      }
    );

  }

}
