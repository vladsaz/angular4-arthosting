import { Component, OnInit } from '@angular/core';
import {Base64ConverterService} from '../base64-converter.service';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.css'],
  providers: [Base64ConverterService]
})
export class Base64Component implements OnInit {

  constructor(private converter:Base64ConverterService) { }

  ngOnInit() {
    this.converter.convertImage();
    console.log('converter');
  }

}
