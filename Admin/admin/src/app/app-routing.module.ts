import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VieweditComponent } from './viewedit/viewedit.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { AddpersonComponent } from './addperson/addperson.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {EditpersonComponent} from './editperson/editperson.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent,
  canActivate: [AuthGuard],
    children :[
    {path: '', component: VieweditComponent},
    {path: 'editperson', component: EditpersonComponent},
    {path: 'edit', component: EditComponent},
    {path: 'addservice', component: AddserviceComponent},
    {path: 'addperson', component: AddpersonComponent},
    {path: 'list', component: ListComponent},
    {path: 'feedback', component: FeedbackComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
