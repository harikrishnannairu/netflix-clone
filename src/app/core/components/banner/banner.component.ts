import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements  OnChanges {
  @Input() bannerOverView:string;
  @Input({required:true}) bannerTitle:string;
  @Input() bannerVideoKey:String = '';
  sanitizer=inject(DomSanitizer);
  videoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.bannerVideoKey}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&showinfo=0`);
  constructor(){

  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes && 'bannerVideoKey' in changes){
      this.bannerVideoKey=changes['bannerVideoKey']?.currentValue;
      this.videoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.bannerVideoKey}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1`);
    }
    if(changes && 'bannerOverView' in changes){
      this.bannerOverView=changes['bannerOverView']?.currentValue;
    }
    if(changes && 'bannerTitle' in changes){
      this.bannerTitle=changes['bannerTitle']?.currentValue;
    }
  }
}
