import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from './material/material.module';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {TodoItemComponent} from './components/todo-item/todo-item.component';


@NgModule({
  declarations: [ToolbarComponent, TodoItemComponent],
  imports: [CommonModule, MaterialModule],
  exports: [
    MaterialModule,
    FormsModule,
    ToolbarComponent,
    TodoItemComponent,
  ]
})
export class SharedModule {
}
