import { Component, OnInit } from '@angular/core';
import { Autore } from '../autore';
import { AutoreService } from '../autore.service';

@Component({
  selector: 'app-autore-list',
  templateUrl: './autore-list.component.html',
  styleUrls: ['./autore-list.component.css']
})
export class AutoreListComponent implements OnInit {

  constructor(private autoreService: AutoreService) { }

  errorMessage: string = '';
  autori: Autore[];

  ngOnInit(): void {
    this.autoreService.getAutori().subscribe(
      autoriItem => this.autori = autoriItem,
      err => this.errorMessage = err
    );
  }

}
