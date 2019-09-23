import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component ({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html'
})
export class NavBarComponent implements OnInit {
    @Input() title: string;

    constructor(private auth: AuthService) {}

    ngOnInit() {

    }
}
