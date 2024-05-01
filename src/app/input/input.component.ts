import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }
  counter: any =0
  displayError:boolean=false

  ngOnInit(): void {
    this.onclickFunction()
  }

  onclickFunction(){
    setTimeout(()=>{
      if(this.counter===0){
        this.displayError=true
      }

    },2000)
  }



}
