import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Schedule } from '../models/schedule';
import { environment } from 'src/environments/environment.development';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http:HttpClient) { }

  create(schedule:Schedule){
    console.log(schedule)
    return this.http.post(environment.schedules, schedule);
  }

  getScheduledMovies(){
    return this.http.get<Movie[]>(environment.schedules+"/scheduled-movies");
  }

  getMovieSchedules(movie:Movie){
    return this.http.get<Schedule[]>(environment.schedules+"/movie-schedules/"+movie.id);
  }
}
