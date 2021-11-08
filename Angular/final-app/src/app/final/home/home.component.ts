import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

order:string;
type:string;

  constructor() { }

  ngOnInit(): void {
  }

  receivedOrder(order:string){
    this.order=order;
   }

   receivedType(type:string){
    this.type=type;
   }

}
