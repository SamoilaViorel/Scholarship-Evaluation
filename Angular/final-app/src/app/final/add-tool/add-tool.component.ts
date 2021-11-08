import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.scss']
})
export class AddToolComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addEmployee(): void {
    this.router.navigateByUrl('/addEmployee');
 }

}
