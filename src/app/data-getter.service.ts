import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Injectable()
export class DataGetterService {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  getImageData() {
    return this.http.get('http://localhost:8081/process_get')
      .toPromise()
      .then(data => {
          return data;
      });
  }

  getBase64Image() {
    return this.http.get('http://localhost:8081/get-shiba')
    .toPromise()
    .then(data => {
      return data;
    })
  }

}
