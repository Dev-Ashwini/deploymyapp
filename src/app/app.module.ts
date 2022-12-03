import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestservService } from './testserv.service';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisteredDoctorsComponent } from './registered-doctors/registered-doctors.component';
import { SuccessfullComponent } from './successfull/successfull.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    RegisterComponent,
    RegisteredDoctorsComponent,
    SuccessfullComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TestservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
