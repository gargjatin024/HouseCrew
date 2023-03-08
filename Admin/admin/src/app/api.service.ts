import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from './config';
import { Observable, from } from 'rxjs';
import { CookieService } from './services/cookie.service';


@Injectable({
  providedIn: 'root',
})
export class apiService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(params: any): Observable<any> {
    return this.http.post(config.api_url + 'admin/login', params);
  }
  add(params: any): Observable<any> {
    return this.http.post(config.api_url + 'admin/addservice', params);
  }
  adds(params: any): Observable<any> {
    return this.http.post(config.api_url + 'admin/addperson', params);
  }
  getListData(): Observable<any> {
    return this.http.post(config.api_url + 'admin/listservice',{});
  }

  deleteservice(_id:any): Observable<any> {
    return this.http.post(config.api_url + 'admin/deleteservice',{_id});
    
  }
  getListData1(): Observable<any> {
    return this.http.post(config.api_url + 'admin/listperson',{});
  }
  deleteperson(_id:any): Observable<any> {
    return this.http.post(config.api_url + 'admin/deleteperson',{_id});
  }
  editperson(_id:any): Observable<any> {
    return this.http.post(config.api_url + 'admin/editperson',{_id});
  }
  updatepersondata(params: any): Observable<any> {
    return this.http.post(config.api_url + 'admin/updateperson',params);
  }

}