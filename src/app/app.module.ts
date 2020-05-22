import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { AutoreListComponent } from './autore/autore-list/autore-list.component';
import { HttpClientModule }    from '@angular/common/http';
import { AutoreDetailComponent } from './autore/autore-detail/autore-detail.component';
import { AutoreCreateComponent } from './autore/autore-create/autore-create.component';
import { AutoreEditComponent } from './autore/autore-edit/autore-edit.component';
import { DatePipe } from '@angular/common';
import { AutoreDeleteComponent } from './autore/autore-delete/autore-delete.component';
import { AutoreSearchComponent } from './autore/autore-search/autore-search.component';
import { AutoreSearchResultsComponent } from './autore/autore-search-results/autore-search-results.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    AutoreListComponent,
    AutoreDetailComponent,
    AutoreCreateComponent,
    AutoreEditComponent,
    AutoreDeleteComponent,
    AutoreSearchComponent,
    AutoreSearchResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
