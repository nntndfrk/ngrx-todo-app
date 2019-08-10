import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  value: string;
  @Output() addTodo = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onAddTodo() {
    this.addTodo.next(this.value);
    this.value = '';
  }

}
