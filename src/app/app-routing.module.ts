import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './mycomponents/todos/todos.component';
import { TodoitemsComponent } from './mycomponents/todoitems/todoitems.component';
import { AddtodoComponent } from './mycomponents/addtodo/addtodo.component';
import { CalculatorComponent } from './mycomponents/calculator/calculator.component';

const routes: Routes = [
  {path: 'todo', component: TodosComponent},
 
 { path: 'calc', component: CalculatorComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
