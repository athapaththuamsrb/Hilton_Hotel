import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  data:any;
  url = environment.baseUrl;
  constructor(private http: HttpClient) {
  }

  public signUp(
    userName: string,nic:string, address:string,contact: string,accountType:string, email: string, password:string): Observable<any>{
    return this.http.post(this.url+'user/signUp',{userName,nic,address,contact,accountType,email,password});
  }

  public login(email: string, password: string): Observable<any>{
    this.data=this.http.get(this.url+'user/login',{headers:{email,password}});
    return this.data;
  }
  public getDataFromToken():Observable<any>{
    return this.data;
  }

  // const decodedToken = helper.decodeToken(myRawToken);
}
