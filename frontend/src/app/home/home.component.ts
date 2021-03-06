'use strict';

import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent {
    constructor() {}
}
