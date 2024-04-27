import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from '../../classes/movie';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss'],
  // standalone:true
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class MovieCarouselComponent implements OnInit,AfterViewInit{
  movieImgUrl:string="http://image.tmdb.org/t/p/w500/";
  movieContentCard:string;
  @Input() movieList:Movie[];
  @Input() title:string;
  @Output() movieClicked:EventEmitter<number> = new EventEmitter();
  @ViewChild('swiperContainer') swiperContainer!:ElementRef;
 constructor(){

 }
 ngOnInit(): void {
   
 }
 ngAfterViewInit(): void {
   this.initSwiper();
 }
 initSwiper(){
  return new Swiper(this.swiperContainer.nativeElement,{
    slidesPerView:3,
    slidesPerGroup:2,
    centeredSlides:true,
    loop:true,
    breakpoints:{
      375:{
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 2,
        centeredSlides: true,
      },
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 5,
        centeredSlides: true,
      },
      900: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 5,
        centeredSlides: true,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 5,
        centeredSlides: false,
      },
      1500: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 5,
        centeredSlides: false,
      },
      1800: {
        slidesPerView: 5,
        slidesPerGroup: 6,
        spaceBetween: 5,
        centeredSlides: false,
      }
    }
  })
 }
 mouseHovered(movie:Movie){
  this.movieContentCard=movie.title ?? movie.name;
 }
 mouseLeaved(movie:Movie){
this.movieContentCard=null;
 }
 cardClicked(movie:Movie){
  this.movieClicked.emit(movie?.id);
 }
}
