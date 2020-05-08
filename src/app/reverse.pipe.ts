import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any) {
    if(value==null || value === '') {
      return value;
    }
    const arr: string[] = value.split('').reverse();
    let result:string = '';
    for(const char of arr) {
      result+=char;
    }
    return result;
  }

}