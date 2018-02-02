import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Injectable()
export class DataGetterService {

  public objectData: object = undefined;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    this.getImageData();
    console.log(this.objectData)
  }

  getImageData() {
    this.http.get('http://localhost:5000/dogs').subscribe(data => {
      // console.log('from service');
      // console.log(this);  
      this.objectData = data;
    });
    // console.log("from service");
    // console.log(this.objectData);
    return this.objectData
  }

}
