import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {pluck} from 'rxjs/operators';

import {TodosState} from '../core/redux/todos.state';
import {TodoModel} from '../core/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todosState$: Observable<TodoModel[]>;

  // инжектируем стор как обычный angular-сервис
  constructor(private store: Store<TodosState>) {
  }

  ngOnInit() {
    // получаем состояние из экземпляра по соотвествующему ключу
    this.todosState$ =
      this.store.select('todosPage')
        .pipe(pluck('todos'));
  }

  addNewTodo(text: string) {
  }

  markTodo(id: number) {
  }

  deleteTodo(id: number) {
  }
}
