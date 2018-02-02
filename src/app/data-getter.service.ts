import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Injectable()
export class DataGetterService {

  data: any = [];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  getImageData() {
    this.http.get('http://localhost:5000/dogs').subscribe(data => {

    });
    return this.data
  }

}
