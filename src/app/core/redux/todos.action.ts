import {Action} from '@ngrx/store';

import {TodoModel} from '../models/todo.model';


/* Уникальная строковая константа для описания Action-а */
export const ADD_TODO = 'ADD_TODO';


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
