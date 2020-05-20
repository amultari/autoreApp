import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoreService } from '../autore.service';
import { Autore } from '../autore';

@Component({
  selector: 'app-autore-delete',
  templateUrl: './autore-delete.component.html',
  styleUrls: ['./autore-delete.component.css']
})
export class AutoreDeleteComponent implements OnInit {
  errorMessage: string = '';
  selectedAutore: Autore;

  constructor(private route: ActivatedRoute, private autoreService: AutoreService,
    private router: Router) { }

  ngOnInit(): void {
    let idParam = +this.route.snapshot.paramMap.get('id');
    this.autoreService.getAutore(idParam).subscribe(
      autoreItem => this.selectedAutore = autoreItem,
      err => this.errorMessage = err
    )
  }

  delete(autoreInput: Autore): void {
    console.log('Autore da eliminare...' + JSON.stringify(autoreInput));
    this.autoreService.delete(autoreInput).subscribe(
      () => {},
      err => this.errorMessage = err,
      () => this.router.navigate(['/autore'], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
    );
  }

  onBack(): void {
    this.router.navigate(['/autore']);
  }

}
