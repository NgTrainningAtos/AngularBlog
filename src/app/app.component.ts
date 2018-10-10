import { BlogApiService } from './blog-api.service';
import { Component } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  blogListe: any;
  constructor(private bs: BlogApiService) {
    this.bs
      .getBlogs()
      .pipe(take(6))
      .subscribe(val => {
        console.log(val);
      });
  }
}
