import { Component, OnInit, Input, ViewChild, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BlogItem, BlogItemStatus } from '@core/models/blog-item';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '@core/services/blog.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { NotificationService } from '@core/services/notification.service';
import { Location } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  blogItem: BlogItem;
  blogForm: FormGroup;
  deleted: Boolean;

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private blogService: BlogService,
    private ngZone: NgZone,
    private notificationService: NotificationService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    let blogItemId: number;
    const foo = this.route.params.subscribe(params => {
      blogItemId = +params['id'];

    });

    if (blogItemId > 0) {
      this.blogService.getBlog(blogItemId).subscribe(
        res => {
          this.blogItem = res;
        },
        error => {
          console.error(error);
        },
        () => {
          this.initializeBlogItemForm();
        }
      );
    } else {
      this.initializeBlogItemForm();
    }
  }

  // handles autosize textbox
  triggerResize() {
    this.ngZone.onStable
      .pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  initializeBlogItemForm(): void {
    this.blogForm = this.formBuilder.group({
      headline: [this.blogItem ? this.blogItem.headline : ''],
      shortDescription: [this.blogItem ? this.blogItem.shortDescription : ''],
      dateCreated: [this.blogItem ? this.blogItem.dateCreated : new Date()],
      status: [this.blogItem ? this.blogItem.status : BlogItemStatus.draft],
      promoted: [this.blogItem ? this.blogItem.promoted : false],
      content: [this.blogItem ? this.blogItem.content : ''],
      thumbnail: [this.blogItem ? this.blogItem.thumbnail : ''],
      author: [this.blogItem ? this.blogItem.author : 'Adam Bakal'],
      dateLive: [
        this.blogItem && this.blogItem.dateLive
          ? this.blogItem.dateLive
          : null
      ],
      dateDeleted: [
        this.blogItem && this.blogItem.dateDeleted
          ? this.blogItem.dateDeleted
          : null
      ],
      id: [this.blogItem ? this.blogItem.id : 0]
    });

    this.deleted = (this.blogItem && this.blogItem.dateDeleted) ? true : false;
   }

  onActiveChange(active: boolean): void {
    this.blogForm.controls['promoted'].setValue(active);
  }

  onSubmit() {
    // triage form - either create or update
    if (!this.blogItem) {

    const blogItem = Object.assign({}, this.blogForm.value);
      // date deleted
      if (blogItem.dateDeleted && this.deleted === false) {
        this.blogForm.controls['dateDeleted'].setValue(null);
      } else if (!blogItem.dateDeleted && this.deleted) {
        this.blogForm.controls['dateDeleted'].setValue(new Date());
      }

      this.blogService.createBlog(blogItem).subscribe(res => {
        this.blogItem = res;
      }, error => {
        console.error(error);
      }, () => {
        if (this.blogItem) {
          this.notificationService.generateSnackbarNotification(`Blog item created`);
          this.location.back();
        }
      });
    } else {
      this.blogItem = Object.assign({}, this.blogForm.value);
      this.blogService.updateBlog(this.blogItem).subscribe(res => {
        this.blogItem = res;
      }, error => {
        console.error(error);
      }, () => {
        if (this.blogItem) {
          this.notificationService.generateSnackbarNotification(`Blog item updated`);
          this.location.back();
        }
      });
    }
  }

  cancel(): void {
    this.location.back();
  }
}
