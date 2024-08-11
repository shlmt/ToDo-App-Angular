import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-timer-down',
  templateUrl: './timer-down.component.html',
  styleUrls: ['./timer-down.component.scss']
})
export class TimerDownComponent implements OnInit,OnDestroy {

  constructor() { }

  @Input() set dDay(dDay:Date){
    this._dDay = dDay
  }

  private _dDay:Date
  private subscription = new Subscription()

  public days:number
  public hours:number
  public minutes:number
  public seconds:number

  ngOnInit(): void {
    this.subscription.add(interval(1000).subscribe(()=>{
      this.getTimeDiff()
    }))
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe()
  }

  private getTimeDiff(){
    let timeDiff = new Date(this._dDay).getTime() - new Date().getTime()
    this.seconds = Math.floor(timeDiff/1000 % 60)
    this.minutes = Math.floor(timeDiff/(1000 * 60) % 60)
    this.hours = Math.floor(timeDiff/(1000*60*60) % 24)
    this.days = Math.floor(timeDiff/(1000*60*60*24))
  }

}
