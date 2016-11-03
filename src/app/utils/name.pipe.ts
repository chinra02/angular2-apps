import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'NamePipe'})
export class NamePipe implements PipeTransform {
  transform(name, args:string[]) : any {
           name = name || {};
            function trim(str) {
                return str && str.trim && str.trim() || str;
            }

            //var firstMiddle = [name.first, name.middle].map(trim).filter(angular.identity).join(' ');
            return [name.last, , name.suffix].map(trim);
  }
}