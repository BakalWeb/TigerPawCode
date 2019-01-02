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
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.inMemory
    ? environment.inMemoryApiUrl
    : environment.apiUrl;
  }

  getBlog(id: number): Observable<BlogItem> {
    if (id <= 0) {
      return null;
    }
    return this.http.get<BlogItem>(`${this.apiUrl}/blogs/${id}`);
  }

  getAllBlogs(): Observable<BlogItem[]> {
    return this.http.get<BlogItem[]>(`${this.apiUrl}/blogs/`);
  }

  getLiveBlogs(): Observable<BlogItem[]> {
   try {
    return this.http.get<BlogItem[]>(`${this.apiUrl}/blogs/live`);
   } catch (error) {
     console.error(error);
   }
  }

  createBlog(blogItem: BlogItem): Observable<BlogItem> {
    return this.http.post<BlogItem>(`${this.apiUrl}/blogs/`, blogItem)
    .pipe(tap(x => {
      // console.log(`Submitted blog for post: ${blogItem}`);
    }
    ));
  }

  updateBlog(blogItem: BlogItem): Observable<BlogItem> {
    return this.http.put<BlogItem>(`${this.apiUrl}/blogs/`, blogItem);
  }

  deleteBlog(id: number): Observable<any> {
    return this.http.delete<BlogItem>(`${this.apiUrl}/blogs/${id}`);
  }

}
