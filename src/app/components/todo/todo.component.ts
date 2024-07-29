import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo:ITodo;

  constructor() { }

  ngOnInit(): void {}

  public onCompleteTodo(todo:ITodo){
    todo.isCompleted = true
  }

  public onArchiveTodo(){
    this.todo.isArchived = true
  }

}
