import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTodoFormComponent } from '../new-todo-form/new-todo-form.component';
import { Subscription } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import { ITodo } from 'src/app/models/todo.interface';

@Component({
  selector: 'app-todos-container',
  templateUrl: './todos-container.component.html',
  styleUrls: ['./todos-container.component.scss']
})
export class TodosContainerComponent implements OnInit, OnDestroy {

  private subscription:Subscription = new Subscription()

  public todo:ITodo
  public todos:Array<ITodo>=[]

  constructor(public dialog:MatDialog,private todoService:TodoService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getSelectedTodo().subscribe(data=>this.todo=data)
    )
    this.subscription.add(this.todoService.GetTodos().subscribe(data=>
      this.todos = data
    ))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(NewTodoFormComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
