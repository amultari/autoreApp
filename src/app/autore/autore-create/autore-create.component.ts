import { Component, OnInit } from '@angular/core';
import { Autore } from '../autore';
import { NgForm } from '@angular/forms';
import { AutoreService } from '../autore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autore-create',
  templateUrl: './autore-create.component.html',
  styleUrls: ['./autore-create.component.css']
})
export class AutoreCreateComponent implements OnInit {
  autore: Autore = new Autore();
  errorMessage: string = '';

  constructor(private autoreService: AutoreService, private router: Router) { }

  ngOnInit(): void { }

  save(autoreForm: NgForm): void {
    console.log('sub ' + JSON.stringify(this.autore));
    console.log('Errori ' + autoreForm.form.controls);
    console.log('touched ' + autoreForm.touched);
    console.log('valid ' + autoreForm.form.valid);
    if (autoreForm.valid) {
      this.autoreService.create(this.autore).subscribe(
        autoreItem => {
          this.autore = autoreItem;
          console.log('inserito ' + JSON.stringify(autoreItem))
        },
        err => this.errorMessage = err,
        () => this.router.navigate([`/autore/${this.autore.id}`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
      );
    } else {
      this.errorMessage = 'Attenzione! Operazione fallita! Il form non è stato validato'
    }

  }

}
