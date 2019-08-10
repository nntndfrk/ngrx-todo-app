import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {TodosState} from '../core/redux/todos.state';
import {AddTodo} from '../core/redux/todos.action';
import {TodoModel} from '../core/models/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  value: string;

  constructor(private store: Store<TodosState>) {
  }

  ngOnInit() {
  }

  onAddTodo() {
    if (this.value === '') {
      return;
    }

    /*
     для добавления нового todo в стор,
     необходимо задиспатчить соответствующий экшн
    */
    this.store.dispatch(new AddTodo(this.createTodo()));

    this.value = '';
  }

  private createTodo(): TodoModel {
    return {
      id: Date.now(),
      text: this.value,
      status: false
    };
  }
}
