import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogItem, BlogItemStatus } from '@core/models/blog-item';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '@env/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl: string;

  constructor(private http: HttpClient, private logService: LogService) {
    this.apiUrl = environment.inMemory
    ? environment.inMemoryApiUrl
    : environment.apiUrl;
  }

  getBlog(id: number): Observable<BlogItem> {
    try {
      if (id <= 0) {
        return null;
      }
      return this.http.get<BlogItem>(`${this.apiUrl}/blogs/${id}`);
    } catch (error) {
      this.logService.handleError(error);
    }
  }

  getAllBlogs(): Observable<BlogItem[]> {
    try {
      return this.http.get<BlogItem[]>(`${this.apiUrl}/blogs/`);
    } catch (error) {
      this.logService.handleError(error);
    }
  }

  getLiveBlogs(): Observable<BlogItem[]> {
   try {
    return this.http.get<BlogItem[]>(`${this.apiUrl}/blogs/live`);
   } catch (error) {
    this.logService.handleError(error);
   }
  }

  createBlog(blogItem: BlogItem): Observable<BlogItem> {
   try {
    return this.http.post<BlogItem>(`${this.apiUrl}/blogs/`, blogItem)
    .pipe(tap(x => {
      // console.log(`Submitted blog for post: ${blogItem}`);
    }
    ));
   } catch (error) {
     this.logService.handleError(error);
   }
  }

  updateBlog(blogItem: BlogItem): Observable<BlogItem> {
    try {
      return this.http.put<BlogItem>(`${this.apiUrl}/blogs/`, blogItem);
    } catch (error) {
      this.logService.handleError(error);
    }
  }

  deleteBlog(id: number): Observable<any> {
    try {
      return this.http.delete<BlogItem>(`${this.apiUrl}/blogs/${id}`);
    } catch (error) {
      this.logService.handleError(error);
    }
  }

}
