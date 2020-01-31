import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { PipepersonalPipe } from './pipes/pipepersonal.pipe';
import { ChildDataBindingComponent } from './data-bindig/child-data-binding/child-data-binding.component';
import { EjemploDataBidingComponent } from './data-bindig/ejemplo-data-biding/ejemplo-data-biding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    PipepersonalPipe,
    ChildDataBindingComponent,
    EjemploDataBidingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
