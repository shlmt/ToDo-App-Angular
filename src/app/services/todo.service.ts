import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock:ITodo[]=
  [{id:1,"title":"nllus  purus sit","description":"nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras","isCompleted":false,"isArchived":false,"endDate":"4/27/2024",selected:true},
  {id:2,"title":"inelit  in hac","description":"quisque ut erat curabitur gravida nisi at nibh in hac","isCompleted":false,"isArchived":false,"endDate":"10/16/2023",selected:false},
  {id:3,"title":"auus et ultrices","description":"odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar","isCompleted":false,"isArchived":false,"endDate":"2/26/2024",selected:false},
  {id:4,"title":"rhem porta volutpat","description":"adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin","isCompleted":false,"isArchived":false,"endDate":"8/12/2023",selected:false},
  {id:5,"title":"comorbi vel","description":"quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus","isCompleted":false,"isArchived":false,"endDate":"7/2/2023",selected:false},
  {id:6,"title":"momodo","description":"quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non","isCompleted":false,"isArchived":false,"endDate":"4/1/2024",selected:false},
  {id:7,"title":"primis in faucibus","description":"mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea","isCompleted":false,"isArchived":false,"endDate":"12/3/2023",selected:false},
  {id:8,"title":"jute ipsum curae","description":"nunc viverra dapibus nulla suscipit ligula in lacus curabitur at","isCompleted":false,"isArchived":false,"endDate":"5/21/2024",selected:false},
]

  private _todoSubject:BehaviorSubject<ITodo[]> = new BehaviorSubject(this.mock)
  private _singleTodoSubject:BehaviorSubject<ITodo> = new BehaviorSubject(this.mock[0])

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


}
