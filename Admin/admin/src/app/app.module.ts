import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { AuthGuardService } from './auth-guard.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { VieweditComponent } from './viewedit/viewedit.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { AddpersonComponent } from './addperson/addperson.component';
import { ListComponent } from './list/list.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { EditComponent } from './edit/edit.component';
import { EditpersonComponent } from './editperson/editperson.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    VieweditComponent,
    AddserviceComponent,
    AddpersonComponent,
    ListComponent,
    FeedbackComponent,
    EditComponent,
    EditpersonComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
