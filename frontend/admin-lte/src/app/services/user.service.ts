import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = "http://localhost:3000/staff"

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>(this.URL);
  }
}
