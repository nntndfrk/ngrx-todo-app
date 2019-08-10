import {TodoModel} from '../models/todo.model';
import {ADD_TODO, DELETE_TODO, TodosActions, UPDATE_TODO} from './todos.action';


/* Моковые данные приложения */
const TODO_MOCK: TodoModel[] = [
  {id: 1, text: 'Купить продукты', status: false},
  {id: 2, text: 'Изучить Angular', status: true},
  {id: 3, text: 'Изучить NgRx', status: false},
];

/* Стартовое состояние приложения */
const initState = {
  todos: TODO_MOCK
};

/* Редьюсер представляет собой функцию, которая принимает в качестве параметров
состояние (state) первым и специальный объект action, по типу Action
из библиотеки @ngrx/store */
export function todoReducer(state = initState, action: TodosActions) {

  switch (action.type) {

    /* В зависимости от значения type у объекта action
    редьюсер должен возвращать новое (измененное или нет)
    состояние */
    case ADD_TODO:
      // бизнес логика приложения
      // и возвращаем измененный стейт
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter(todo => todo.id !== action.payload.id)
        ]
      };

    case UPDATE_TODO:
      const idx = state.todos.findIndex(todo => {
        return todo.id === action.payload.id;
      });
      state.todos[idx].status = !state.todos[idx].status;
      return {
        ...state
      };

    /* По умоляанию возвращаем неизмененное состояние */
    default:
      return state;
  }
}
