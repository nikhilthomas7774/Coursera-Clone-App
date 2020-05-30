import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmplyeeserviceService {
url='http://localhost:2843/'
  constructor(private http:HttpClient) { }
  createemployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.url+'api/COURSES_USER_DETAILS',employee)
  }
}
    