import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';
import {v4 as uuid} from 'uuid' 

@Component({
  selector: 'app-new-todo-form',
  templateUrl: './new-todo-form.component.html',
  styleUrls: ['./new-todo-form.component.scss']
})
export class NewTodoFormComponent implements OnInit {

  @ViewChild("f") form :NgForm

  constructor(public dialog:MatDialog, public todoService:TodoService) { }

  ngOnInit(): void {
  }

  public onNewTodoSubmit(){
    if(this.form.valid){
      const {title, desc, date} = this.form.value
      const newTodo:ITodo = {
        id:uuid(),
        title,
        description:desc,
        endDate:date,
        isArchived:false,
        isCompleted:false,
        selected:true
      }
      this.todoService.addNewTodo(newTodo)
      this.dialog.closeAll()
    }
  }
}
