import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private _http: HttpClient) {}

  addBlogs(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/blogs', data);
  }
  getBlogs(): Observable<any> {
    return this._http.get('http://localhost:3000/blogs');
  }
  deleteBlog(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/blogs/${id}`);
  }
}
