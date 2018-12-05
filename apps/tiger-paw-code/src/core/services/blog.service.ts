import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogItem, BlogItemStatus } from '@core/models/blog-item';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '@env/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlog(id: number): Observable<BlogItem> {
    return this.http.get<BlogItem>(`${environment.apiUrl}/blogs/?id=${id}`);
  }

  getAllBlogs(): Observable<BlogItem[]> {
    return this.http.get<BlogItem[]>(`${environment.apiUrl}/blogs/`);
  }

  getLiveBlogs(): Observable<BlogItem[]> {
    return this.http.get<BlogItem[]>(`${environment.apiUrl}/blogs/?status=${BlogItemStatus.published}`);
  }
}
