import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiURL = 'https://api.example.com/wires/auth/signup';

  constructor(private http: HttpClient) {}

  register(username: string, fullName: string, email: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const body = {
      username,
      fullName,
      email,
      password
    };

    return this.http.post(this.apiURL, body, httpOptions);
  }
}
