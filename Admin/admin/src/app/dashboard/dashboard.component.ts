import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from '../services/cookie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService) { 
    
  }

  ngOnInit(): void {
  }
  logout() {
    this.cookieService.deleteCookie('currentUser');
    this.cookieService.deleteCookie('status');
    this.router.navigate(['/']);
  }
}