import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
 
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
  providers: [NgbCarouselConfig]
  
})
export class SlidesComponent {
  images=[
    'assets/logo.jpg',
    'assets/logo.jpg',
    'assets/logo.jpg',
    'assets/logo.jpg'
  ];
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 1000;
    // config.wrap = false;
    // config.keyboard = false;
    // config.pauseOnHover = false;
  }

}
