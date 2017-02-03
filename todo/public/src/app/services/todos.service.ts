import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Todo } from './../models/Todo';

@Injectable()
export class TodosService {

  private todosUrl: string = '/todos';
  private addTodoUrl: string = '/add';
  private delTodoUrl: string = '/del';
  private updateTodoUrl: string = '/update';

  constructor(private http: Http) { }

  addTodo(todo: Todo) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.addTodoUrl, { todo: todo }, headers)
      .map(todo => todo.ok)
  }

  delTodo(todo: Todo) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.delTodoUrl, { todo: todo }, headers)
      .map(todo => todo.ok)
  }

  updateTodo(todo: Todo) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.updateTodoUrl, { todo: todo }, headers)
      .map(todo => todo.ok)
  }

  getTodos() {
    return this.http.get(this.todosUrl)
      .map(todos => todos.json())
  }

}