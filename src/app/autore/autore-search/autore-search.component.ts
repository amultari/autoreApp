import { Component, OnInit } from '@angular/core';
import { Autore } from '../autore';
import { AutoreService } from '../autore.service';
import { NgForm } from '@angular/forms';
import { AutorePaginationInfoService } from '../autore-pagination-info.service';
import { ActivatedRoute } from '@angular/router';

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
  //il totalCount della query
  autoreCount: number = 0;
  private offset: number = 0;

  getMaxPerPage(): number {
    return this.autorePaginationInfoService.getMaxPerPage();
  }

  constructor(private autoreService: AutoreService, private autorePaginationInfoService: AutorePaginationInfoService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let stoTornandoIndietroDaSottofunzione: boolean = false;
    //verifico presenza parametro che mi dice che sto tornando indietro da una sottofunzione
    this.route
      .queryParams
      .subscribe(params => {
        // se non è presente il _backFromSubFunction_ non faccio nulla
        console.log('query params...' + params['_backFromSubFunction_'])
        stoTornandoIndietroDaSottofunzione = params['_backFromSubFunction_'] ? true : false;
      });

    if (!stoTornandoIndietroDaSottofunzione) {
      this.resetForm();
      this.resetResults();
    } else {
      this.restorePaginationInfo();
    }
  }

  resetForm(): void {
    this.autoreSearch = new Autore();
    this.autoreSearch.inAttivita = null;
    this.autorePaginationInfoService.resetForm();
  }

  resetResults(): void {
    this.searchResults = [];
    this.currentPage = 1;
    this.offset = 0;
    this.autoreCount = 0;
    this.autorePaginationInfoService.resetResults();
  }

  search(autoreForm: NgForm): void {
    this.resetResults();
    console.log('sub ' + JSON.stringify(this.autoreSearch));
    this.executeSearchAndBindResults();
  }

  nextPage(nextPageFromEmitter: number) {
    this.offset = nextPageFromEmitter > this.currentPage ?
      this.offset + this.getMaxPerPage() :
      this.offset - this.getMaxPerPage();

    this.currentPage = nextPageFromEmitter;
    this.executeSearchAndBindResults();
  }

  private executeSearchAndBindResults(): void {
    const queryParams: Map<string, string> = new Map<string, string>(Object.entries(this.autoreSearch));
    queryParams.set('offset', this.offset.toString());
    queryParams.set('max', this.getMaxPerPage().toString());
    this.autoreService.searchAutori(queryParams).subscribe(
      searchResultsItem => {
        this.searchResults = searchResultsItem.autoreList;
        this.autoreCount = searchResultsItem.autoreCount;
        this.errorMessage = '';
      },
      err => {
        this.errorMessage = err;
        this.searchResults = [];
      },
      () => this.autorePaginationInfoService.updatePaginationInfo(this.autoreSearch,
        this.searchResults, this.currentPage, this.autoreCount, this.offset)
    );
  }

  restorePaginationInfo(): void {
    this.autoreSearch = this.autorePaginationInfoService.autoreSearch;
    this.searchResults = this.autorePaginationInfoService.searchResults;
    this.currentPage = this.autorePaginationInfoService.currentPage;
    this.offset = this.autorePaginationInfoService.offset;
    this.autoreCount = this.autorePaginationInfoService.autoreCount;
  }

}
