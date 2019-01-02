import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'blogItemPosted'
})
export class BlogItemPostedPipe implements PipeTransform {
  transform(value: Date, args?: any): any {
    const now = moment.utc();
    const datePosted = moment(value);
    const hourDiff = moment.duration(now.diff(value), 'milliseconds').asHours();
    const dayDiff = moment.duration(now.diff(value), 'milliseconds').asDays();
    const monthDiff = moment.duration(now.diff(value), 'milliseconds').asMonths();

    if (hourDiff < 0 ) {
      console.error(`Invalid blog item date has been passed to the pipe: ${datePosted}`);
      return null;
    }

    // minutes
    if (hourDiff > 0 && hourDiff < .50) {
      return 'Just now';
    } else if (hourDiff > .50 && hourDiff < 1) {
      return 'Less than an hour ago';
    } else if (hourDiff > 1) {
      // hours
      if (hourDiff > 1 && hourDiff < 2) {
        return 'An hour ago';
      } else if (hourDiff > 2 && hourDiff < 24) {
        return `${Math.round(hourDiff).toString()} hours ago`;
      } else if (hourDiff > 24 && hourDiff < 48) {
        return 'A day ago';
      } else if (hourDiff > 48) {
        // days
        if (dayDiff > 2 && dayDiff < 30) {
          return `${Math.round(dayDiff)} days ago`;
        } else if (dayDiff > 30) {
          // months
          if (monthDiff >= 1 && monthDiff < 2) {
            return '1 month ago';
          } else if (monthDiff > 2 && monthDiff < 12) {
            return `${Math.round(monthDiff)} months ago`;
          } else if (monthDiff > 12) {
            // years
            if (monthDiff > 12 && monthDiff < 24) {
              return 'A year ago';
            } else {
              const years = moment.duration(hourDiff).asYears();
              return `${Math.round(years)} ago`;
            }
          }
        }
      }
    } else {
      console.log(`Error calculating when blog item was posted: ${hourDiff}`);
    }

    return hourDiff;
  }
}
