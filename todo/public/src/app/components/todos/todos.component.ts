import { Component, OnInit } from '@angular/core';
import { TodosService } from './../../services/todos.service';

import { Todo } from './../../models/Todo';

@Component({
  moduleId: module.id,
  selector: '<todos>',
  templateUrl: './todos.component.html',
  providers: [TodosService]
})

export class TodosComponent implements OnInit {

  private todos: Todo[];
  private todoText: string = '';
  private editable: boolean[] = [];

  constructor(private todosService: TodosService) { }

  addTodo(event: any, text: string) {
    var newTodo = new Todo();
    newTodo.text = text;
    newTodo.isCompleted = false;

    this.todosService.addTodo(newTodo)
      .subscribe(ok => {
          if(ok === true)
            this.todos.push(newTodo)
      })
    
    this.todoText = '';
  }

  delTodo(event: any, todo: Todo) {
    this.todosService.delTodo(todo).
      subscribe(ok => {
        if(ok === true)
          this.getTodos()
      })
  }

  updateTodo(event: any, todo: Todo, index: number) {
    this.editable[index] = false;    
    this.todosService.updateTodo(todo).
      subscribe(ok => {
        if(ok === true)
          this.getTodos()
      })
  }

  statusTodo(event: any, todo: Todo, index: number) {
    todo.isCompleted = !todo.isCompleted;
    this.updateTodo(event, todo, index);    
  }

  getTodos() {
    this.todosService.getTodos()
      .subscribe(res => this.todos = res)
  }

  ngOnInit() {
    this.getTodos();
  }

}