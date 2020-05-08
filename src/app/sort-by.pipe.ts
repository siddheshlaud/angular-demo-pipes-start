import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: any, sortByString: string): any {
    if(value == null || value.length === 0 || sortByString == null || sortByString ===''){
      return value;
    }
    console.log('sortBy transform('+ sortByString +')');
    return value.sort((obj1, obj2) => {
    if (obj1[sortByString] < obj2[sortByString]) {
        return -1;
      }
      if (obj1[sortByString] > obj2[sortByString]) {
        return 1;
      }
      return 0;
    });
  }

}