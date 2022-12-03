import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestservService } from '../testserv.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

  tableShow: boolean = false;
  public showPassword: boolean = false;
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  constructor(public fb: FormBuilder,
    private http: TestservService,
    public router: Router) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    this.registrationForm = new FormGroup({
      mblno: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(emailPattern)]),
      name: new FormControl('', [Validators.required]),
      setpassword: new FormControl('', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]),
      confirmpassword: new FormControl('', [Validators.required]),
      graduation: new FormControl('', [Validators.required]),
      degree: new FormControl('', [Validators.required]),
      degree2: new FormControl('', [Validators.required]),
      onlinefee: new FormControl(''),
      personfee: new FormControl(''),
    })

  }

  get getForm(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.registrationForm.value)
    this.http.saveregisterDoctors(this.registrationForm.value).subscribe((result) => {
      console.log(result);
      this.router.navigate(["successfull"]);
      this.registrationForm.reset();
    })
  }

  addTable() {
    this.tableShow = true;
  }
}
