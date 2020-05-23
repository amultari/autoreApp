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
  errorMessage: string = '';
  //bean usato per il form
  autoreSearch: Autore;
  //lista di risultati di cui fare il display nel nested component
  searchResults: Autore[] = [];

  //Pagination
  currentPage: number = 1;
  //numero di elementi per pagina
  static readonly MAXPERPAGE: number = 5;
  //il totalCount della query
  autoreCount: number = 0;
  private offset: number = 0;

  getMaxPerPage(): number {
    return AutoreSearchComponent.MAXPERPAGE;
  }

  constructor(private autoreService: AutoreService) { }

  ngOnInit(): void {
    this.resetForm();
    this.resetResults();
  }

  resetForm(): void {
    this.autoreSearch = new Autore();
    this.autoreSearch.inAttivita = null;
  }

  resetResults(): void {
    this.searchResults = [];
    this.currentPage = 1;
    this.offset = 0;
    this.autoreCount = 0;
  }

  search(autoreForm: NgForm): void {
    this.resetResults();
    console.log('sub ' + JSON.stringify(this.autoreSearch));
    this.executeSearchAndBindResults();
  }

  nextPage(nextPageFromEmitter: number) {
    this.offset = nextPageFromEmitter > this.currentPage ? this.offset + AutoreSearchComponent.MAXPERPAGE : this.offset - AutoreSearchComponent.MAXPERPAGE;
    this.currentPage = nextPageFromEmitter;
    this.executeSearchAndBindResults();
  }

  private executeSearchAndBindResults(): void {
    const queryParams: Map<string, string> = new Map<string, string>(Object.entries(this.autoreSearch));
    queryParams.set('offset', this.offset.toString());
    queryParams.set('max', AutoreSearchComponent.MAXPERPAGE.toString());
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
