import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataGetterService } from '../data-getter.service';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.css'],
  providers: [DataGetterService]
})

export class MediaCardComponent implements OnInit, AfterViewInit {

  private mediaTitle: string = undefined;
  private mediaSubtitle: string = undefined;
  private mediaURL: string = undefined;
  private mediaDescription: string = undefined;
  private data: object = undefined;


  constructor(private dataGetterService: DataGetterService) { }

  ngOnInit() {
    this.dataGetterService.getImageData().then(data => {
      this.data = data;
      // console.log(this.data);
      console.log('type');
      console.log(this.data.media[0].mediaType == 'img');
      
    });

  }

  ngAfterViewInit() {
    
  }
}
