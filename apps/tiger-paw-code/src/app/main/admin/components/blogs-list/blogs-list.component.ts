import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '@core/services/blog.service';
import { BlogItem } from '@core/models/blog-item';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.scss']
})
export class BlogsListComponent implements OnInit {
  blogs: BlogItem[];
  datasource: MatTableDataSource<BlogItem>;
 displayedColumns: string[] = ['id', 'headline', 'status', 'promoted', 'dateLive', 'deleted', 'edit'];

  constructor(private router: Router, private blogService: BlogService) {}

  ngOnInit() {
    this.getAllBlogs();
  }

  getAllBlogs(): void {
    this.blogService.getAllBlogs().subscribe((response: BlogItem[]) => {
      this.datasource = new MatTableDataSource(response);
    });
  }

  edit(id: number): void {
    this.router.navigateByUrl(`admin/blogs/update/${id}`);
  }

  delete(id: number): void {
    this.blogService.deleteBlog(id).subscribe(res => {
      if (res) {
        this.datasource = null;
        this.getAllBlogs();
      }
    }, error => {
      console.error(error);
    });
  }
}
