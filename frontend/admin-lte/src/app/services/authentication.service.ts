import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private URL = "http://localhost:3000/staff";

  constructor(private http: HttpClient) {
  }
  signIn(user: any) {
    return this.http.post<any>(this.URL + "/find", user)
  }
}
