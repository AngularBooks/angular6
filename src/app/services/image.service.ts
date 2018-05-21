import { Injectable } from '@angular/core';
import { Image } from '../models/image';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getImages(): Observable<any> {
    return this.http.get('http://angularbook.test/api/v1/images')
      .pipe(map((response) => response));
  }
}
