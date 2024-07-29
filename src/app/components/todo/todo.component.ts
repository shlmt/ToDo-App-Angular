import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit,OnDestroy {

  public todo:ITodo;
  private subscription:Subscription = new Subscription()

  constructor(private todoService:TodoService) { }

  public onCompleteTodo(todo:ITodo){
    todo.isCompleted = true
  }

  public onArchiveTodo(){
    this.todo.isArchived = true
  }

  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getSelectedTodo().subscribe(data=>this.todo=data)
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
