import { Injectable } from '@angular/core';
import { DataGetterService } from './data-getter.service';

@Injectable()
export class Base64ConverterService {

  constructor(private dataGetter:DataGetterService) { }

  convertImage() {
    let image = this.dataGetter.getBase64Image();
    console.log("image");
    console.log(image);
  }
}
