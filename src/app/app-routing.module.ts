import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './register/register.component';
import { RegisteredDoctorsComponent } from './registered-doctors/registered-doctors.component';
import { SuccessfullComponent } from './successfull/successfull.component';

const routes: Routes = [
  { path: '', redirectTo: 'layout', pathMatch: 'full', },
  { path: 'layout', component: LayoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'doctors', component: RegisteredDoctorsComponent },
  { path: "successfull", component: SuccessfullComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
