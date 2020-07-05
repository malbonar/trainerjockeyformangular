import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { AccessToken } from '../models/AccessToken';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiKeyTokenService {
    private accessToken: string;
    private localStorageTokenKey = 'https://horseracing/api-token';

    constructor(private http: HttpClient) { }

    getAccessToken(): Observable<{access_token: string}> {
        // if token not found in local storage then fetch from authorization server
        // if (localStorage.getItem(this.localStorageTokenKey) === null) {
          return this.http.post<AccessToken>('https://mbsoftwaresolutions.auth0.com/oauth/token',
          '{' +
            '"client_id":"' + environment.auth0ApiClientId  + '",' +
            '"client_secret":"' + environment.auth0ApiClientSecret + '",' +
            '"audience":"https://horseracing/",' +
            '"grant_type":"client_credentials"' +
          '}',
            {
              headers: {'content-type': 'application/json'}
            });
        // }
        // if token found in local storage then return that value
        // of() is an Observable method that returns an observable that returns the value inside the method
        // return of({access_token: localStorage.getItem(this.localStorageTokenKey)});
    }

    removeLocalToken() {
        localStorage.removeItem(this.localStorageTokenKey);
    }
}
