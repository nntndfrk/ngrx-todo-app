import {Component, Input, OnInit} from '@angular/core';
import {TodoModel} from '../core/models/todo.model';
import {Store} from '@ngrx/store';
import {TodosState} from '../core/redux/todos.state';
import {DeleteTodo, UpdateTodo} from '../core/redux/todos.action';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoModel;
  constructor(private store: Store<TodosState>) { }

  ngOnInit() {
  }

  mark() {
    this.store.dispatch(new UpdateTodo(this.todo));
  }

  deleteTodo() {
    this.store.dispatch(new DeleteTodo(this.todo));
  }
}
