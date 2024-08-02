import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private historyTodos = localStorage.getItem('todos')
  private todos:ITodo[]= this.historyTodos ? JSON.parse(this.historyTodos) : []
  
  private _todoSubject:BehaviorSubject<ITodo[]> = new BehaviorSubject(this.todos)
  private selectFirst= ():ITodo=>{this.todos[0].selected = true;return this.todos[0]}
  private _selectedTodoSubject:BehaviorSubject<ITodo> = new BehaviorSubject(this.todos.length ? this.selectFirst() : null)

  constructor() { }

  public GetTodos():Observable<ITodo[]>{
    return this._todoSubject.asObservable()
  }

  public getSelectedTodo():Observable<ITodo>{
    return this._selectedTodoSubject.asObservable()
  }

  public setSelectedTodo(todo:ITodo){
    this._selectedTodoSubject.next(todo)
  }

  public addNewTodo(newTodo:ITodo){
    const existingTotos:ITodo[] = this._todoSubject.value
    existingTotos.push(newTodo)
    this._todoSubject.next(existingTotos)
    localStorage.setItem('todos',JSON.stringify(existingTotos))
  }

  public onEditTodo(attr:string, todoId:string){
    if(attr!='isCompleted' && attr!='isArchived') return;
    const existingTotos:ITodo[] = this._todoSubject.value
    const index = existingTotos.findIndex((t)=>t.id===todoId)
    existingTotos[index][attr] = true
    localStorage.setItem('todos',JSON.stringify(existingTotos))
  }

}
