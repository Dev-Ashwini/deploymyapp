import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestservService {

  url = "http://localhost:3000/registeredDoctors";

  constructor(private http: HttpClient) { }

  getRegisteredDoctors() {
    return this.http.get(this.url);
  }

  saveregisterDoctors(data: any) {
    console.log(data);
    return this.http.post(this.url, data);
  }

}
