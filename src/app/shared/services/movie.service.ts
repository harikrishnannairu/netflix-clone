import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

const options={
  params:{
    include_adult:'false',
    include_video:'true',
    language:'en-US',
    page:'1',
    sort_by:'popularity.desc'
  },
  headers:{
    accept:'application/json',
    Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzNkNGVkNmU5M2MwNDcwZGRjZDI5ODhmMDhkNzZiOSIsInN1YiI6IjY2MTY1YTdjZGMxY2I0MDE3YzFjMTAwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.klIeoU_OpdTV2V-Md6ToeFY6f24dONMvQlD2bG0uPtg'

  }
}

@Injectable({
  providedIn: 'root'
})
// const options={
//   params:{
//     include_adult:'false',
//     include_video:'true',
//     language:'en-US',
//     page:'1',
//     sort_by:'popularity.desc'
//   },
//   Headers:{
//     accept:'applications/json',
//     Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzNkNGVkNmU5M2MwNDcwZGRjZDI5ODhmMDhkNzZiOSIsInN1YiI6IjY2MTY1YTdjZGMxY2I0MDE3YzFjMTAwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.klIeoU_OpdTV2V-Md6ToeFY6f24dONMvQlD2bG0uPtg'

//   }
// }
export class MovieService {

  constructor(private http:HttpClient) { }
  getMovies(){
  const url='https://api.themoviedb.org/3/discover/movie'
  return this.http.get<any>(url,options);
  }
  getTvShows() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv', options)
  }

  getRatedMovies() {
    return this.http.get('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies', options)
  }

  getBannerImage(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images`, options)
  }

  getBannerVideo(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos`, options);
  }

  getBannerDetail(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, options);
  }

  getNowPlayingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing', options)
  }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular', options)
  }

  getTopRated() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated', options)
  }

  getUpcomingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming', options)
  }
}
