import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ascending-or-not',
  templateUrl: './ascending-or-not.component.html',
  styleUrls: ['./ascending-or-not.component.scss']
})
export class AscendingOrNotComponent implements OnInit {

  @Output() emitSelectedOrder = new EventEmitter<string>();
  order: string;


  constructor() { }

  ngOnInit(): void {
  }

  selectOrder() {
    this.emitSelectedOrder.emit(this.order)
  }

}
