import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';
import {map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService, private router: Router) {}

  register (user: Object): Observable<any> {
    return this.http.post('http://angularbook.test/api/v1/register', user)
      .pipe(
        map((response) => response),
        catchError(this.errorHandler)
      );
  }

  login (user: Object): Observable<any> {
    return this.http.post('http://angularbook.test/api/v1/login', user)
      .pipe(
        map((response) => {
        const token = response['token'];

        console.log('Response token:' + token);

        if (token) {
          this.token = token;
          localStorage.setItem('token', this.token);
          return true;
        } else {
          return false;
        }

      }),
        catchError(this.errorHandler)
      );
  }

  loggedIn() {
    return !this.jwtHelper.isTokenExpired();
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('token');
    console.log('you are logged out!');
    this.router.navigate(['/']);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.error || {message: 'Server Error'});
  }
}
