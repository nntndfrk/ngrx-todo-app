import {Component, OnInit} from '@angular/core';
import {TodoModel} from '../core/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: TodoModel[];

  constructor() {
  }

  ngOnInit() {
    this.todoList = TODO_MOCK;
  }

  addNewTodo(text: string) {
    const newTodo: TodoModel = {
      text,
      id: Date.now(),
      status: false
    };

    this.todoList.push(newTodo);
  }

  markTodo(id: number) {
    const idx = this.todoList.findIndex(t => t.id === id);

    this.todoList[idx].status = !this.todoList[idx].status;
  }

  deleteTodo(id: number) {
    this.todoList = this.todoList.filter(t => t.id !== id);
  }
}

const TODO_MOCK: TodoModel[] = [
  {id: 1, text: 'Купить продукты', status: false},
  {id: 2, text: 'Изучить Angular', status: true},
  {id: 3, text: 'Изучить NgRx', status: false},
];
