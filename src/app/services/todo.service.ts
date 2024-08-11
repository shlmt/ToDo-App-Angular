import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private historyTodos = localStorage.getItem('todos')  
  private initializeTodos(): ITodo[] {
    let todos: ITodo[] = this.historyTodos ? JSON.parse(this.historyTodos).filter(t => !t.isArchive) : [];
    todos = todos.map(item => ({ ...item, selected: false }))
    if (todos.length > 0) {
      todos[0].selected = true;
    }
    return todos;
  }
  private todos: ITodo[] = this.initializeTodos();
  
  private _todoSubject: BehaviorSubject<ITodo[]> = new BehaviorSubject(this.todos);
  private _selectedTodoSubject:BehaviorSubject<ITodo> = new BehaviorSubject(this.todos.length ? this.todos[0] : null)

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
    const saveTodo = {...newTodo}
    saveTodo.selected = false
    existingTotos.push(saveTodo)
    this._todoSubject.next(existingTotos)
    localStorage.setItem('todos',JSON.stringify(existingTotos))
    this.todos.forEach(todo=>{if(newTodo.id!==todo.id)todo.selected=false; else todo.selected=true})
    this.setSelectedTodo(newTodo)
  }

  public onEditTodo(attr:string, todoId:string){
    if(attr!='isCompleted' && attr!='isArchived') return;
    const existingTotos:ITodo[] = this._todoSubject.value
    const index = existingTotos.findIndex((t)=>t.id===todoId)
    existingTotos[index][attr] = true
    existingTotos[index].selected = false
    localStorage.setItem('todos',JSON.stringify(existingTotos))
    existingTotos[index].selected = true
  }

}
