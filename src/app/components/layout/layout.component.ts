import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChildMessageService } from 'src/app/services/child-message.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {
  nameNew="Vicky";

  constructor(public childMessageService:ChildMessageService) { 
    setTimeout(() => {
      window.alert(this.childMessageService.messageFromChild);  
    }, 2000);
    
  }

  ngOnInit(): void {
  }
  
  childOutput(data:string){
    console.log("data>>",data);
  }
}
