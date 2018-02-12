import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { MediaCardComponent } from './media-card/media-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule, Routes } from '@angular/router';
import { Base64Component } from './base64/base64.component';
import { DataGetterService } from './data-getter.service';
import { Base64ConverterService } from './base64-converter.service';
const appRoutes: Routes = [
  { path: '', component: MediaCardComponent },
  { path: 'base64', component: Base64Component }
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GridListComponent,
    MediaCardComponent,
    Base64Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true }  <-- debugging purposes only
    )
  ],
  providers: [DataGetterService],
  bootstrap: [AppComponent]
})
export class AppModule { }