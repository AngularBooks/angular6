import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from '../models/user';
import {catchError} from 'rxjs/internal/operators';
import {map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  addUser(user: Object): Observable<any> {
    return this.http.post('http://angularbook.test/api/v1/users', user)
      .pipe(
        map((response) => response),
        catchError(this.errorHandler)
      );
  }

  getUsers(): Observable<any> {
    return this.http.get('http://angularbook.test/api/v1/users')
      .pipe(
        map((response) => response),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.error || {message: 'Server Error'});
  }
}
