import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  movieId = '';

  constructor(private _activedRoute: ActivatedRoute) {

    this._activedRoute.params.subscribe((p) => {
      this.movieId = p["id"];

      console.log('Movie Id = ' + this.movieId);
    })
  }
  
}
