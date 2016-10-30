import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'commaSeparatedList'})
export class CommaSeparatedList implements PipeTransform {
  transform(list, args:string[]) : any {
     return list.join(", ");
  }
}