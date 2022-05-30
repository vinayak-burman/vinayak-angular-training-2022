import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  script='<script>alert("Hello World")</script>';
  div="<h1>Vicky</h1>";

  noOfProd=0;


  constructor() { }

  ngOnInit(): void {
  }
  getDivStyle(){
    if(this.noOfProd >0){
      return ({
        color:'blue'
      })
    }
    else{
      return ({
        color:'red'
      })
    }
    
  }

}
