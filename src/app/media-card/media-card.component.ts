import { Component, OnInit } from '@angular/core';
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


  constructor(private dataGetterService: DataGetterService) { }

  ngOnInit() {
    this.dataGetterService.getImageData().then(data => {
      this.data = data;
      // console.log(this.data);
    });
  }
}
