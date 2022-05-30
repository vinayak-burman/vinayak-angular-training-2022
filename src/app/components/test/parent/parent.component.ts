import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  inputVal="";

  messageFromChildComp='';

  constructor() { }

  ngOnInit(): void {
  }

  inputChanged(event:any){
    console.log(event.target.value);
    this.inputVal=event.target.value;
  }

  childCryingEventHandler(event:string){
    console.log("Message From Child",event);
    this.messageFromChildComp=event;
  }

}
