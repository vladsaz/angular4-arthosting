import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DataGetterService } from '../data-getter.service';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.css'],
  providers: [DataGetterService]
})
export class MediaCardComponent implements OnInit {

  private imageTitle: string = undefined;
  private imageSubtitle: string = undefined;
  private imageURL: string = undefined;
  private imageDescription: string = undefined;
  private data: object = undefined;
  
  

  constructor(private dataGetterService: DataGetterService) {
    // this.data = this.dataGetterService.getImageData();
    // console.log(this.dataGetterService.getData());
    // console.log("from component");
    // console.log(this.data);
  }

  async getImages() {
    // let data1 = await this.dataGetterService.getImageData();
    // console.log(data1);
    // return this.data;
  }

  ngOnInit() {
    this.data = this.dataGetterService.objectData;
    console.log(this.dataGetterService)
  }
}
