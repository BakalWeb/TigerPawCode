import { Component, OnInit, Input, ViewChild, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BlogItem, BlogItemStatus, BlogItemForm } from '@core/models/blog-item';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '@core/services/blog.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { NotificationService } from '@core/services/notification.service';
import { Location } from '@angular/common';
import { AuthService } from '@core/services/auth.service';
@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  blogItemForm: BlogItemForm;
  blogForm: FormGroup;

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private blogService: BlogService,
    private ngZone: NgZone,
    private notificationService: NotificationService,
    private location: Location,
    private authService: AuthService
  ) {}

  ngOnInit() {
    let blogItemId: number;
    const foo = this.route.params.subscribe(params => {
      blogItemId = +params['id'];

    });

    if (blogItemId > 0) {
      this.blogService.getBlog(blogItemId).subscribe(
        res => {
          this.blogItemForm = res;
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

    // get user
    if (!this.blogItemForm.userId) {
      this.blogItemForm.userId = this.authService.getUserLogin().id;
      console.log(this.blogItemForm.userId);
    }
    this.blogForm = this.formBuilder.group({
      headline: [this.blogItemForm ? this.blogItemForm.headline : ''],
      shortDescription: [this.blogItemForm ? this.blogItemForm.shortDescription : ''],
      dateCreated: [this.blogItemForm ? this.blogItemForm.dateCreated : new Date()],
      status: [this.blogItemForm ? this.blogItemForm.status : BlogItemStatus.draft],
      promoted: [this.blogItemForm ? this.blogItemForm.promoted : false],
      content: [this.blogItemForm ? this.blogItemForm.content : ''],
      thumbnail: [this.blogItemForm ? this.blogItemForm.thumbnail : ''],
      userId: [this.blogItemForm.userId],
      dateLive: [
        this.blogItemForm && this.blogItemForm.dateLive
          ? this.blogItemForm.dateLive
          : null
      ],
      toggleDelete: [
        this.blogItemForm && this.blogItemForm.dateDeleted
          ? true
          : false
      ],
      id: [this.blogItemForm ? this.blogItemForm.id : 0]
    });
   }

  onActiveChange(active: boolean): void {
    this.blogForm.controls['promoted'].setValue(active);
  }

  onSubmit() {
    // triage form - either create or update
    if (!this.blogItemForm) {

    const blogItem = Object.assign({}, this.blogForm.value);
      // date deleted
      blogItem.dateDeleted = (this.blogForm.controls['toggleDelete'].value) ? new Date() : null;

      this.blogService.createBlog(blogItem).subscribe(res => {
        this.blogItemForm = res;
      }, error => {
        console.error(error);
      }, () => {
        if (this.blogItemForm) {
          this.notificationService.generateSnackbarNotification(`Blog item created`);
          this.location.back();
        }
      });
    } else {
      this.blogItemForm = Object.assign({}, this.blogForm.value);
      this.blogItemForm.dateDeleted = (!this.blogItemForm.dateDeleted && this.blogForm.controls['toggleDelete'].value)  ? new Date() : null;
      this.blogService.updateBlog(this.blogItemForm).subscribe(res => {
        this.blogItemForm = res;
      }, error => {
        console.error(error);
      }, () => {
        if (this.blogItemForm) {
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
