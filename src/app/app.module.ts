import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SimplesComponent } from './simples/simples.component';
import { CompostosComponent } from './compostos/compostos.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(
      [
        {path: '', component: AboutComponent},
        {path: 'simples', component: SimplesComponent},
        {path: 'compostos', component: CompostosComponent}
      ]
    )
  ],
  declarations: [ AppComponent, NavbarComponent, SimplesComponent, CompostosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }