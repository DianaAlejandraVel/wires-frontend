import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiURL = 'https://api.example.com/wires/auth/signin';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const body = {
      email,
      password
    };

    return this.http.post(this.apiURL, body, httpOptions);
  }
}
