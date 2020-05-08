import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // PERFORMANCE LOSS, as calculated everytime when input changes (value)
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if(value == null || value.length === 0 || filterString == null || filterString ===''){
      return value;
    }
    const resultArr = [];
    for(const item of value) {
      if( item[propName]===filterString) {
        resultArr.push(item);
      }
    }
    return resultArr;
  }

}