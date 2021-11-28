import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './mycomponents/todos/todos.component';
import { TodoitemsComponent } from './mycomponents/todoitems/todoitems.component';
import { AddtodoComponent } from './mycomponents/addtodo/addtodo.component';
import { CalculatorComponent } from './mycomponents/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoitemsComponent,
    AddtodoComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
