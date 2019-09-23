import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../shared/services/auth.service';

@Component ({
    selector: 'app-logincallback',
    templateUrl: './logincallback.component.html'
})
export class LoginCallbackComponent implements OnInit {

    constructor(private auth: AuthService) { }

    ngOnInit() {
      this.auth.handleAuthCallback();
    }
}