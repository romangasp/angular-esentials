import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { AleatorioComponent } from './aleatorio/aleatorio.component';
import { ColorsComponent } from './colors/colors.component';
import { GreetingComponent } from './greeting/greeting.component';
import { AboutComponent } from './about/about.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { StartComponent } from './start/start.component';
import { Error404Component } from './error404/error404.component';
import { DetailsComponent } from './details/details.component';
import { SelectedBooksService } from './selected-books.service';

const appRoutes: Routes = [
  { path: 'list-books', component: ListBooksComponent },
  { path: 'about', component: AboutComponent },
  { path: 'details', redirectTo: 'list-books' },
  { path: 'details/:id', component: DetailsComponent },
  { path: '404', component: Error404Component },
  { path: '', component: StartComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    AleatorioComponent,
    ColorsComponent,
    GreetingComponent,
    AboutComponent,
    HeaderComponent,
    ListBooksComponent,
    DetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [SelectedBooksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
