import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limite'
})
export class LimitePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
