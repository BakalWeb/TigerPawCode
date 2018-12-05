import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'blogItemPosted'
})
export class BlogItemPostedPipe implements PipeTransform {
  transform(value: Date, args?: any): any {
    const now = moment.utc();
    const datePosted = moment(value).format('DD/MM/YYYY HH:MM:SS');
    const hourDiff = moment.duration(now.diff(value), 'milliseconds').asHours();

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
        return `${hourDiff.toString()} hours ago`;
      } else if (hourDiff > 24 && hourDiff < 48) {
        return 'A day ago';
      } else if (hourDiff > 48) {
        // days
        const days = moment.duration(hourDiff).asDays();
        if (days > 2 && days < 30) {
          return `${days} days ago`;
        } else if (days > 30) {
          // months
          const months = moment.duration(hourDiff).asMonths();
          if (months >= 1 && months < 2) {
            return '1 month ago';
          } else if (months > 2 && months < 12) {
            return `${months} months ago`;
          } else if (months > 12) {
            // years
            if (months > 12 && months < 24) {
              return 'A year ago';
            } else {
              const years = moment.duration(hourDiff).asYears();
              return `${years} ago`;
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
