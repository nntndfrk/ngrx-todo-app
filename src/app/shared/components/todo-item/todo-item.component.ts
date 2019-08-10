import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoModel} from '../../../core/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoModel;
  @Output() todoMark = new EventEmitter<number>();
  @Output() todoDelete = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  mark() {
    this.todoMark.emit(this.todo.id);
  }

  deleteTodo() {
    this.todoDelete.emit(this.todo.id);
  }

}
