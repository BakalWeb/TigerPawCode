import { Component, OnInit, ViewChild } from '@angular/core';
import { BlogService } from '@core/services/blog.service';
import { MatTableDataSource } from '@angular/material';
import { BlogItem } from '@core/models/blog-item';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: BlogItem[];

  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getLiveBlogs();
  }

  getLiveBlogs(): void {
    this.blogService.getLiveBlogs().subscribe(blogs => {
      this.blogs = blogs;
    }, error => {
      console.log(error);
    });
  }
}
