import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartNameComponent } from './depart-name/depart-name.component';
import { FacultyNameComponent } from './faculty-name/faculty-name.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartNameComponent,
    FacultyNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
