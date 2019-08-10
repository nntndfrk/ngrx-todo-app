import {Action} from '@ngrx/store';

import {TodoModel} from '../models/todo.model';


/* Уникальная строковая константа для описания Action-а */
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';


/*
  Action представляет собой класс, который имплементирует
  инферфейс Action из библиотеки '@ngrx/store'.

  Action состоит из двух полей:
    - type -- уникальная строковая константа,
              которая характеризует данный Action

    - payload -- данные ...
 */
export class AddTodo implements Action {
  /*
    Согласно интерфейсу Action у класса должно быть
    обязательное поле type, которе будет равно определенной
    строковой константе
  */
  readonly type = ADD_TODO;

  // данные, которые передаются в Action должны быть принять
  // в констукторе класса
  constructor(public payload: TodoModel) {
  }
}

export class DeleteTodo implements Action {
  readonly type = DELETE_TODO;

  constructor(public payload: TodoModel) {
  }
}

export class UpdateTodo implements Action {
  readonly type = UPDATE_TODO;

  constructor(public payload: TodoModel) {
  }
}

export type TodosActions = AddTodo | DeleteTodo | UpdateTodo;
