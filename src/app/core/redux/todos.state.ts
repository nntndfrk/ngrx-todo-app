import {TodoModel} from '../models/todo.model';

/*
*  создаем интерфейс, который будет описывать состояние (стейт)
*/
export interface TodosState {
  todosPage: {
    todos: TodoModel[]
  };
}
