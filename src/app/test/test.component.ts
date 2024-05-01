import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }
  value: any

  ngOnInit(): void {
  }

  clickedFunction(text:any){
    let value = 1
    setTimeout(()=>{
      if(value==1){
        this.timeOutFunction(text)
      }
    },100)
  }

  timeOutFunction(text:any){
    console.log(text)
  }

}
