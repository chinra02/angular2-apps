var _ = require('underscore');
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'claimLineStatusCodes'})
export class ClaimLineStatusCodes implements PipeTransform {
  transform(elem, args:string[]) : any {
                 if (!elem) return null;
            var pairs = [
                [elem.statusCategoryCode1, elem.statusCode1],
                [elem.statusCategoryCode2, elem.statusCode2],
                [elem.statusCategoryCode3, elem.statusCode3]
            ];

            return null;
  }
}