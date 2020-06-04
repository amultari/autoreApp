import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Autore } from '../autore';
import { AutoreService } from '../autore.service';

@Component({
  selector: 'app-autore-edit',
  templateUrl: './autore-edit.component.html',
  styleUrls: ['./autore-edit.component.css']
})
export class AutoreEditComponent implements OnInit {
  errorMessage: string = '';
  selectedAutore: Autore = new Autore();
  dataNascitaString: string = '';

  constructor(private route: ActivatedRoute, private autoreService: AutoreService,
    private datePipe: DatePipe, private router: Router) { }

  ngOnInit(): void {
    let idParam = +this.route.snapshot.paramMap.get('id');
    this.autoreService.edit(idParam).subscribe(
      autoreItem => {
        this.selectedAutore = autoreItem;
        console.log(JSON.stringify(autoreItem));
        this.dataNascitaString = this.datePipe.transform(autoreItem.dataNascita, 'yyyy-MM-dd');
        console.log(this.dataNascitaString);
      },
      err => this.errorMessage = err
    )
  }

  update(autoreForm: NgForm): void {
    const dataNascitaStringParsed = new Date(this.dataNascitaString);
    this.selectedAutore.dataNascita = dataNascitaStringParsed;

    if (autoreForm.valid) {
      this.autoreService.update(this.selectedAutore).subscribe(
        autoreItem => {
          console.log('modificato ' + JSON.stringify(autoreItem));
          this.selectedAutore = autoreItem;
        },
        err => this.errorMessage = err,
        () => this.router.navigate([`/autore/${this.selectedAutore.id}`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
      );
    } else {
      this.errorMessage = 'Attenzione! Operazione fallita! Il form non è stato validato'
    }

  }


}
