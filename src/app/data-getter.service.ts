import { Injectable } from '@angular/core';

@Injectable()
export class DataGetterService {

  constructor() { }

  getData() {
    let imageData = {
      images: [
        {
          imageID: 1,
          imageTitle: "Shiba Inu",
          imageSubtitle: "Dog Breed",
          imageURL: "https://material.angular.io/assets/img/examples/shiba2.jpg",
          imageDescription: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
        },
        {
          imageID: 2,
          imageTitle: "German Shepherd",
          imageSubtitle: "Dog Breed",
          imageURL: "http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg",
          imageDescription: "The German Shepherd is a breed of medium to large-sized working dog that originated in Germany. The breed's officially recognized name is German Shepherd Dog in the English language. The breed was once known as the Alsatian in Britain and Ireland."
        }
      ]

    }

    return imageData
  }

}
