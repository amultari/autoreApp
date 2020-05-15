import { Component, OnInit } from '@angular/core';
import { Autore } from '../autore';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoreService } from '../autore.service';

@Component({
  selector: 'app-autore-detail',
  templateUrl: './autore-detail.component.html',
  styleUrls: ['./autore-detail.component.css']
})
export class AutoreDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private autoreService: AutoreService,
    private router:Router) { }

  selectedAutore: Autore;
  errorMessage: string = '';

  ngOnInit(): void {
    let idParam = +this.route.snapshot.paramMap.get('id');
    this.autoreService.getAutore(idParam).subscribe(
      autoreItem => {
        this.selectedAutore = autoreItem;
        console.log(JSON.stringify(autoreItem))
      },
      err => this.errorMessage = err
    )
  }

  onBack(): void {
    this.router.navigate(['/autore']);
  }

}
