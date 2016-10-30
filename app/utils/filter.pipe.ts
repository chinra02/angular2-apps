import {Pipe} from '@angular/core';

@Pipe({name: 'filter'})
export class FilterPipe {
  transform(value, filters) {

    var filter = function(obj, filters) {
        if(filters){
           return Object.keys(filters).every(prop => obj[prop] === filters[prop])
        }
        else{
            return obj;
        }
      
    }

    return value.filter(obj => filter(obj, filters[0]));
  }
}