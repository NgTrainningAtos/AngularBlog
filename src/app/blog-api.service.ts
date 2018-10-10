import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogApiService {
  constructor(private http: HttpClient) {}
  getBlogs() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
