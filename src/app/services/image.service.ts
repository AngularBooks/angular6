import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getImages(): Observable<any> {
    return this.http.get('http://angularbook.test/api/v1/images')
      .pipe(map((response) => response));
  }

  addImage(image: Object): Observable<any> {
    return this.http.post('http://angularbook.test/api/v1/images', image)
      .pipe(
        map((response) => response),
        catchError(this.errorHandler)
      );
  }

  getImage(id: String): Observable<any> {
    return this.http.get('http://angularbook.test/api/v1/images/' + id)
      .pipe(map((response) => response));
  }

  updateImage(image: Object): Observable<any> {
    const apiUrl = 'http://angularbook.test/api/v1/images';
    const url = `${apiUrl}/${image['id']}`;
    return this.http.put(url, image)
      .pipe(
        map((response) => response),
        catchError(this.errorHandler)
      );
  }

  deleteImage(id: String): Observable<any> {
    const apiUrl = 'http://angularbook.test/api/v1/images';
    const url = `${apiUrl}/${id}`;
    return this.http.delete(url)
      .pipe(
        map((response) => response),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.error || {message: 'Server Error'});
  }
}
