import { Component, OnInit } from '@angular/core';
import { TestservService } from '../testserv.service';

@Component({
  selector: 'app-registered-doctors',
  templateUrl: './registered-doctors.component.html',
  styleUrls: ['./registered-doctors.component.css']
})
export class RegisteredDoctorsComponent implements OnInit {
  doctorData: any = [];
  cards: Array<any> = [];
  maxdate: any;
  experience: any;
  constructor(private http: TestservService) {
    this.maxdate = new Date();
  }

  ngOnInit(): void {
    // this.calculateExp();
    this.http.getRegisteredDoctors().subscribe((allData) => {
      console.log(allData)
      this.doctorData = allData;
    })

  }


  // calculateExp() {
  //   this.experience = this.doctorData.value?.exp;
  //   this.experience = this.maxdate - this.doctorData.control?.graduation;
  //   console.log(this.doctorData.value.exp)
  // }


}
