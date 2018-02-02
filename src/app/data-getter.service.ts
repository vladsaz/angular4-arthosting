import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Injectable()
export class DataGetterService {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  getImageData() {
    return this.http.get('http://localhost:5000/dogs')
      .toPromise()
      .then(data => {
          return data;
      });
  }

}
