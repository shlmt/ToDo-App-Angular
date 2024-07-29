import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos:ITodo[]=[]
  
  private _todoSubject:BehaviorSubject<ITodo[]> = new BehaviorSubject(this.todos)
  private _singleTodoSubject:BehaviorSubject<ITodo> = new BehaviorSubject(this.todos.length ? this.todos[0] : null)

  constructor() { }

  public GetTodos():Observable<ITodo[]>{
    return this._todoSubject.asObservable()
  }

  public getSelectedTodo():Observable<ITodo>{
    return this._singleTodoSubject.asObservable()
  }

  public setSelectedTodo(todo:ITodo){
    this._singleTodoSubject.next(todo)
  }

  public addNewTodo(newTodo:ITodo){
    const existingTotos:ITodo[] = this._todoSubject.value
    existingTotos.push(newTodo)
    this._todoSubject.next(existingTotos)
  }

}
