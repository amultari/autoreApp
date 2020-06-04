import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Autore } from '../autore';
import { AutoreService } from '../autore.service';

@Component({
  selector: 'app-autore-detail',
  templateUrl: './autore-detail.component.html',
  styleUrls: ['./autore-detail.component.css']
})
export class AutoreDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private autoreService: AutoreService,
    private router: Router) { }

  selectedAutore: Autore;
  errorMessage: string = '';
  confirmMessage: string = '';

  ngOnInit(): void {
    let idParam = +this.route.snapshot.paramMap.get('id');
    this.autoreService.getAutore(idParam).subscribe(
      autoreItem => {
        this.selectedAutore = autoreItem;
        console.log(JSON.stringify(autoreItem))
      },
      err => this.errorMessage = err
    );

    //verifico presenza messaggio nei query params
    this.route
      .queryParams
      .subscribe(params => {
        // se non è presente il confirmMessage non faccio nulla
        this.confirmMessage = params['confirmMessage'] ? params['confirmMessage'] : '';
      });
  }

}
