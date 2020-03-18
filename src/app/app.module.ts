import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PrimoComponentComponent } from './primo-component/primo-component.component';
import { SecondoComponent } from './secondo/secondo.component';
import { CicloVitaComponent } from './ciclo-vita/ciclo-vita.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimoComponentComponent,
    SecondoComponent,
    CicloVitaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
