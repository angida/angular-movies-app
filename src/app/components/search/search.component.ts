import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  movieTitle = "";
  movieId = "";
    
  constructor(private _activedRoute: ActivatedRoute) {
  
    this._activedRoute.params.subscribe((p) => {
      this.movieTitle = p["movieTitle"];
      this.movieId = p["movieId"];
      console.log('Movie Title = ' + this.movieTitle);
    })
  }

}
