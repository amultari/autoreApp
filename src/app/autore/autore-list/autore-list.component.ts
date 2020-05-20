import { Component, OnInit } from '@angular/core';
import { Autore } from '../autore';
import { AutoreService } from '../autore.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-autore-list',
  templateUrl: './autore-list.component.html',
  styleUrls: ['./autore-list.component.css']
})
export class AutoreListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private autoreService: AutoreService) { }

  errorMessage: string = '';
  confirmMessage: string = '';
  autori: Autore[];

  ngOnInit(): void {
    this.autoreService.getAutori().subscribe(
      autoriItem => this.autori = autoriItem,
      err => {
        this.errorMessage = err,
          this.autori = [];
      }
    );

    //verifico presenza messaggio nei query params
    this.route
      .queryParams
      .subscribe(params => {
        // se non è presente il confirmMessage non faccio nulla
        console.log('query params...' + params['confirmMessage'])
        this.confirmMessage = params['confirmMessage'] ? params['confirmMessage'] : '';
      });
  }

}
