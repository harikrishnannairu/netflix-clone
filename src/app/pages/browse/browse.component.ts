import { Component, OnInit,inject } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Movie } from 'src/app/shared/classes/movie';
import { ProfileData } from 'src/app/shared/classes/profile-data';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  profileCardData:ProfileData=new ProfileData();
  showProfileCard:boolean;
  movieService=inject(MovieService);
  bannerTitle:string;
  bannerOverView:string;
  bannerVideo:string;
  bannerDetails$=new Observable<any>();
  bannerVideo$=new Observable<any>();
  bannerVideoKey:string;
  bannerDetails:any;
  movieList:Movie[]=[];
  movies:Movie[]=[];
  tvShows:Movie[]=[];
  topRatedMovies:Movie[]=[];
  nowPlayingMovies:Movie[]=[];
  upcomingMovies:Movie[]=[];
  popularMovies:Movie[]=[];
  topRated:Movie[]=[];
  constructor(private authService: AuthService){}
  sources=[
    this.movieService.getMovies(),
    this.movieService.getTvShows(),
    this.movieService.getNowPlayingMovies(),
    this.movieService.getUpcomingMovies(),
    this.movieService.getPopularMovies(),
    this.movieService.getTopRated()
  ];
  ngOnInit(): void {
    // method to store profile card data..from session storage
    this.setProfileCardData();
    // this.getMovieList();
    forkJoin(this.sources)
    .pipe(
      map(([movies,tvShows,nowPlayingMovies,upcomingMovies,popularMovies,topRated])=>{
        // this.bannerDetails$=this.movieService.getBannerDetail(movies?.results[0]?.id);
        // this.bannerVideo$=this.movieService.getBannerVideo(movies?.results[0]?.id);
        return {movies,tvShows,nowPlayingMovies,upcomingMovies,popularMovies,topRated};
      }) 
    ).subscribe((res:any)=>{
      this.movies=res.movies.results as Movie[];
      this.tvShows=res?.tvShows.results as Movie[];
      // this.topRatedMovies=res?.topRatedMovies.results as Movie[];
      this.nowPlayingMovies=res?.nowPlayingMovies.results as Movie[];
      this.upcomingMovies=res?.upcomingMovies.results as Movie[];
      this.popularMovies=res?.popularMovies.results as Movie[];
      this.topRated=res?.topRated.results as Movie[];
      this.bannerDetailsAccess(this.movies[0]?.id);
      this.videoKeyAccess(this.movies[0]?.id);
    })
  }
  bannerDetailsAccess(id:number){
    this.movieService.getBannerDetail(id).subscribe(
      (res)=>{
        this.bannerDetails=res;
      }
    );
  }
  videoKeyAccess(id){
    this.movieService.getBannerVideo(id)
    .subscribe((res:any)=>{
      this.bannerVideoKey=res?.results[0]?.key;
    })
  }
  setProfileCardData(){
    let loggedUser=JSON.parse(sessionStorage.getItem("loggedInUser")!);
    Object.keys(loggedUser).forEach(key=>{
      if(key in this.profileCardData && loggedUser[key] !== undefined){
        this.profileCardData[key as keyof ProfileData]=loggedUser[key];
      }
    })
    console.log("profile ",this.profileCardData.email, this.profileCardData.picture);
  }
  profileHeaderIconClicked(){
    this.showProfileCard=!this.showProfileCard;
  }

  // Method to call movie service 
  getMovieList(){
    this.movieService.getMovies().subscribe((res)=>{
      console.log(res);
      this.movieList=res?.results;
    })
  }
  movieClicked(id:number){
    this.bannerDetailsAccess(id);
    this.videoKeyAccess(id);
    this.scrollToTop();
  }
  scrollToTop(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  signOut(){
    sessionStorage.removeItem("loggedInUser");
    this.authService.signOut();
  }
}
