import { Injectable } from '@angular/core';
import { Autore } from './autore';

@Injectable({
  providedIn: 'root'
})
export class AutorePaginationInfoService {
  //bean usato per il form
  autoreSearch: Autore;
  //lista di risultati di cui fare il display 
  searchResults: Autore[] = [];

  //Pagination
  currentPage: number = 1;
  //numero di elementi per pagina
  static readonly MAXPERPAGE: number = 5;
  //il totalCount della query
  autoreCount: number = 0;
  //l'offset che mi aiuta a capire in che porzione della paginazione mi trovo
  offset: number = 0;

  getMaxPerPage(): number {
    return AutorePaginationInfoService.MAXPERPAGE;
  }

  constructor() { }

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

  updatePaginationInfo(autoreSearchInput: Autore, searchResultsInput: Autore[],
    currentPageInput: number, autoreCountInput: number, offsetInput: number): void {
    this.autoreSearch = autoreSearchInput;
    this.searchResults = searchResultsInput;
    this.currentPage = currentPageInput;
    this.offset = offsetInput;
    this.autoreCount = autoreCountInput;
  }
}
