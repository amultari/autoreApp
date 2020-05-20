import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AutoreListComponent } from './autore/autore-list/autore-list.component';
import { AutoreDetailComponent } from './autore/autore-detail/autore-detail.component';
import { AutoreCreateComponent } from './autore/autore-create/autore-create.component';
import { AutoreEditComponent } from './autore/autore-edit/autore-edit.component';
import { AutoreDeleteComponent } from './autore/autore-delete/autore-delete.component';

const routes: Routes = [
  { path: 'autore', component: AutoreListComponent },
  { path: 'autore/create', component: AutoreCreateComponent },
  { path: 'autore/edit/:id', component: AutoreEditComponent },
  { path: 'autore/delete/:id', component: AutoreDeleteComponent },
  { path: 'autore/:id', component: AutoreDetailComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
