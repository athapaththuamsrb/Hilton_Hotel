import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClerkService {
  url=environment.baseUrl;
  constructor(private http: HttpClient) { }

  getAllClerks() {
    return this.http.get(this.url+'clerk/getAllClerk');
  }

  removeClerk(nic: string) {
    return this.http.post(this.url+'clerk/deleteClerk',{nic});
  }
  saveClerk(name: string,nic:string, address:string,contact: string,position:string, email: string): Observable<any>{
    return this.http.post(this.url+'clerk/signUp',{name,nic,address,contact,position,email});
  }
}
