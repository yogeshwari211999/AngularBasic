import { AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecyce',
  templateUrl: './lifecyce.component.html',
  styleUrls: ['./lifecyce.component.scss']
})
export class LifecyceComponent implements OnInit,OnChanges,DoCheck,AfterViewInit,AfterViewChecked{
  @Input() userName?:string;

  @Output() childEvent=new EventEmitter<string>();

  constructor(){
    console.log("constrctor called");
    console.log(this.userName,"username undefined in constrctor")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes,"ngOnChange");
  }

  ngOnInit(): void {
    console.log(this.userName,"username value there in ngOninit")
    console.log("life cycle started from onInit")
  }

  ngDoCheck(): void {
    console.log("docheck called when ever made changes on component")
  }

  btnClick(){
    console.log("when ever I click the btn do check will call")
  }

  sendToParent(data:any){
    this.childEvent.emit(data)
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")

  }

}
