import { Injectable } from '@angular/core';
import { todo } from '../models/todo.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock:todo[]=
  [{"title":"nllus  purus sit","description":"nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras","isComleted":true,"isAchrives":true,"endDate":"4/27/2024"},
  {"title":"inelit  in hac","description":"quisque ut erat curabitur gravida nisi at nibh in hac","isComleted":false,"isAchrives":true,"endDate":"10/16/2023"},
  {"title":"auus et ultrices","description":"odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar","isComleted":true,"isAchrives":true,"endDate":"2/26/2024"},
  {"title":"rhem porta volutpat","description":"adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin","isComleted":true,"isAchrives":true,"endDate":"8/12/2023"},
  {"title":"comorbi vel","description":"quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus","isComleted":false,"isAchrives":true,"endDate":"7/2/2023"},
  {"title":"momodo","description":"quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non","isComleted":false,"isAchrives":true,"endDate":"4/1/2024"},
  {"title":"primis in faucibus","description":"mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea","isComleted":true,"isAchrives":false,"endDate":"12/3/2023"},
  {"title":"jute ipsum curae","description":"nunc viverra dapibus nulla suscipit ligula in lacus curabitur at","isComleted":false,"isAchrives":true,"endDate":"5/21/2024"},
  {"title":"quc sem duis  proin at turpis a","description":"lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat","isComleted":true,"isAchrives":true,"endDate":"5/3/2024"},
  {"title":"ulibulum aliquet ultrices erat","description":"aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis","isComleted":false,"isAchrives":true,"endDate":"4/6/2024"},
  {"title":"noquam a odio in hac habitasse platea","description":"convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque","isComleted":false,"isAchrives":true,"endDate":"8/26/2023"},
  {"title":"ipinterdum ultrices in","description":"massa tempor convallis nulla neque libero convallis eget eleifend luctus","isComleted":true,"isAchrives":true,"endDate":"8/26/2023"},
  {"title":"vim donec ut neque libero","description":"eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien","isComleted":true,"isAchrives":true,"endDate":"2/26/2024"},
  {"title":"ve ante vestibulum ante ipsum primis","description":"velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id","isComleted":false,"isAchrives":false,"endDate":"7/28/2023"},
  {"title":"phasellus","description":"at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate","isComleted":false,"isAchrives":false,"endDate":"9/19/2023"},
  {"title":"pot eu est congue","description":"lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio","isComleted":true,"isAchrives":false,"endDate":"7/6/2024"},
  {"title":"im enim lorem","description":"massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh","isComleted":false,"isAchrives":false,"endDate":"5/7/2024"},
  {"title":"nisi venenatis diam","description":"parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum","isComleted":false,"isAchrives":true,"endDate":"7/1/2023"},
  {"title":"ses ultrices mattis","description":"et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis","isComleted":true,"isAchrives":false,"endDate":"8/1/2023"},
  {"title":"num proin eu","description":"dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit","isComleted":false,"isAchrives":false,"endDate":"7/18/2024"}]

  private _todoSubject:BehaviorSubject<todo[]> = new BehaviorSubject(this.mock)
  
  constructor() { }

  public GetTodos():Observable<todo[]>{
    return this._todoSubject.asObservable()
  }
}
