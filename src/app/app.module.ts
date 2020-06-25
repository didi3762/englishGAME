import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ResultComponent } from './comps/result/result.component';
import { BoardComponent } from './comps/board/board.component';
import { MainboardComponent } from './comps/mainboard/mainboard.component';
import { HeaderComponent } from './comps/header/header.component';
import { RandomDirective } from './directives/random.directive';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    BoardComponent,
    MainboardComponent,
    HeaderComponent,
    RandomDirective
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
