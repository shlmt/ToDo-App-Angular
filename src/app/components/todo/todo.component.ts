import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo:ITodo;

  constructor(private _todoService:TodoService) { }

  ngOnInit(): void {}

  public onCompleteTodo(todo:ITodo){
    this._todoService.onEditTodo('isCompleted',todo.id)
  }

  public onArchiveTodo(){
    this._todoService.onEditTodo('isArchived',this.todo.id)
  }

}
