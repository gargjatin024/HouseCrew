import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlumberComponent } from './plumber/plumber.component';
import { ElectricianComponent } from './electrician/electrician.component';
import { CarpenterComponent } from './carpenter/carpenter.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'', component:LayoutComponent,
  children :[
    {path: '', component: DashboardComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'plumber', component: PlumberComponent},
    {path: 'electrician', component: ElectricianComponent},
    {path: 'carpenter', component: CarpenterComponent},
    {path: 'feedback', component: FeedbackComponent},
    {path: 'about', component: AboutComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
