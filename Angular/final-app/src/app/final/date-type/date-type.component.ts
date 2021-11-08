import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-type',
  templateUrl: './date-type.component.html',
  styleUrls: ['./date-type.component.scss']
})
export class DateTypeComponent implements OnInit {

  @Output() emitSelectedType = new EventEmitter<string>();
  type:string;

  constructor() { }

  ngOnInit(): void {
  }

  selectOrder() {
    this.emitSelectedType.emit(this.type);
  }

}
