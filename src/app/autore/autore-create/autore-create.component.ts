import { Component, OnInit } from '@angular/core';
import { Autore } from '../autore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-autore-create',
  templateUrl: './autore-create.component.html',
  styleUrls: ['./autore-create.component.css']
})
export class AutoreCreateComponent implements OnInit {
  autore: Autore = new Autore();

  constructor() { }

  ngOnInit(): void { }

  save(autoreForm: NgForm): void {
    console.log('sub');
  }

}
