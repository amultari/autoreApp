import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Autore } from './autore';

@Injectable({
  providedIn: 'root'
})
export class AutoreService {

  private apiServer = 'http://localhost:8080/gestioneautore/api/autore';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getAutori(): Observable<Autore[]> {
    return this.http.get<Autore[]>(this.apiServer).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data)),
        catchError(this.handleError))
    );

  }

  getAutore(idAutoreInput: number): Observable<Autore> {
    return this.http.get<Autore>(this.apiServer + '/' + idAutoreInput.toString()).pipe(
      catchError(this.handleError)
    );
  }

  create(autoreInput:Autore): Observable<Autore> {
    return this.http.post<Autore>(this.apiServer , JSON.stringify(autoreInput), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
