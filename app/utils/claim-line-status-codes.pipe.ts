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

            // _.partial(_.every, _, angular.identity);
            var hasData = function (pair) {
                return _.some(pair, angular.identity);
            }; 

            var joinpair = function (pair) {
                return _.filter(pair, angular.identity).join("-");
            };

            var codes = _.chain(pairs)
                .filter(hasData)
                .map(joinpair)
                .join("/")
                .value();

            return [codes, elem.freeFormMessageText]
                .filter(angular.identity)
                .join(" - ");
  }
}