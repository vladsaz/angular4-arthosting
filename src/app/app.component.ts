import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import {GridListComponent} from './grid-list/grid-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  // imageUrl = undefined;
  // videoUrl = undefined;
  // urlCreator = window.URL;
  // constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
  // }

  // getData() {
  //   this.http.get('http://localhost:5000/angular', { responseType: "blob" }).subscribe(data => {
  //     // console.log(data);
  //     this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(this.urlCreator.createObjectURL(data));
  //     // console.log(this.imageUrl);
  //   });
  // }

  // getDataVideo() {
  //   this.http.get('http://localhost:5000/video', { responseType: "blob" }).subscribe(data => {
  //     console.log(data);
  //     this.videoUrl = this.sanitizer.bypassSecurityTrustUrl(this.urlCreator.createObjectURL(data));
  //     // console.log(this.videoUrl);
  //   });
  // }
}
