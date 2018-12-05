import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BlogService } from '@core/services/blog.service';
import { BlogItem } from '@core/models/blog-item';
import { of, forkJoin, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  blog: BlogItem;
  loadingBlogNav = true;
  previousId: number;
  nextId: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private blogService: BlogService,
  ) {}

  ngOnInit() {
    let id = 0;
    this.route.params.subscribe(x => {
      id = x ? +x['id'] : 0;
      if (id <= 0) {
        this.location.back();
        return;
      }
      this.blogService.getBlog(id).subscribe(
        res => {
          this.blog = res[0];
        },
        error => {
          console.log(error);
        },
        () => {
          this.generateBlogNavigation();
        }
      );
    });
  }

  generateBlogNavigation(): void {
    const previousId = this.blog.id - 1;
    const nextId = this.blog.id + 1;
    forkJoin(
      this.blogService.getBlog(previousId).pipe(
        map(data => {
          return { result: 'succes', blogs: data };
        }),
        catchError(err => {
          console.log(err);
          return of({ result: 'failed', blogs: null });
        })
      ),
      this.blogService.getBlog(nextId).pipe(
        map(data => {
          return { result: 'succes', blogs: data };
        }),
        catchError(err => {
          console.log(err);
          return of({ result: 'failed', blogs: null });
        })
      )
    ).subscribe(x => {
      this.previousId = x[0].blogs[0].id ? x[0].blogs[0].id : 0;
      this.nextId = x[1].blogs[0].id ? x[1].blogs[0].id : 0;

      this.loadingBlogNav = false;
    });
  }
}
