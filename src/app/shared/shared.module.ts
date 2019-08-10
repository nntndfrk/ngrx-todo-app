import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from './material/material.module';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';


@NgModule({
  declarations: [ToolbarComponent, TodoItemComponent, TodoFormComponent],
  imports: [CommonModule, FormsModule, MaterialModule],
  exports: [
    MaterialModule,
    ToolbarComponent,
    TodoItemComponent,
    TodoFormComponent,
  ]
})
export class SharedModule {
}
