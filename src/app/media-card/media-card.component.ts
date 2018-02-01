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

  private imageTitle:string = undefined;
  private imageSubtitle:string = undefined;
  private imageURL:string = undefined;
  private imageDescription:string = undefined;
  
  constructor(private dataGetterService: DataGetterService) {
    // this.data = 
   }

  ngOnInit() {
    let data = this.dataGetterService.getData();
    this.imageTitle = data.images[0].imageTitle;
    this.imageSubtitle = data.images[0].imageSubtitle;
    this.imageURL = data.images[0].imageURL;
    this.imageDescription = data.images[0].imageDescription;

    for(let image in data.images){
      console.log(image, data.images[image]);
    }
  }

}
