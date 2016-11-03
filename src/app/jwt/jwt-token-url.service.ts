import { Configuration } from './configuration';
import { Injectable } from '@angular/core';

@Injectable()
export class JWTTokenUrlService {

    constructor(private config: Configuration) { }

    getJWTServletUrl = function getJWTServletUrl() {
        // Prefer baseAppUrl if we are in an IFrame.

        if (window.top && window.top['baseAppUrl']) {
            return window.top.top['baseAppUrl'] + "/jwt";
        } else {
            // Fall back to the configured URL on the
            return this.config.jwtBaseUrl+ "/jwt";
        }
    }

}