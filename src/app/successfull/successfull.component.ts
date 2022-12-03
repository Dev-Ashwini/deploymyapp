import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successfull',
  templateUrl: './successfull.component.html',
  styleUrls: ['./successfull.component.css']
})
export class SuccessfullComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  gotoDoctors() {
    this.router.navigate(["doctors"]);
  }
  gotologin() {
    this.router.navigate(["layout"]);
  }
}
