import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AccessToken } from 'src/Models/AccessToken';

const apiUrl = environment.apiUrl + 'TrainerJockeyForm';

@Injectable({
  providedIn: 'root'
})
export class TrainerJockeyService {
  localStorageTokenKey: string;

  constructor(private http: HttpClient) {
    this.localStorageTokenKey = 'https://horseracing/token';
  }

  getTrainerJockeyForm(days: number)  {
    // flatMap allows you to string multiple observables together one after the other and return a single observable,
    // but also allowing passing parameters between observables
    return this.getAccessToken()
      .pipe(flatMap((token) => this.gettrainerJockeyFormData(days, token.access_token)))
      .toPromise();
  }

  private gettrainerJockeyFormData(days: number, token: string) {
    // store token in local storage if not exists
    if (localStorage.getItem(this.localStorageTokenKey) === null) {
      localStorage.setItem(this.localStorageTokenKey, token);
    }

    return this.http.get(`${apiUrl}?days=${days}&racedate=${new Date().toISOString().slice(0, 10)}`,
      {
        headers: {'authorization': `Bearer ${token}` }
      });
  }

  private getAccessToken() {
    // if token not found in local storage then fetch from authorization server
    if (localStorage.getItem(this.localStorageTokenKey) === null) {
      return this.http.post<AccessToken>('https://mbsoftwaresolutions.auth0.com/oauth/token',
        '{' +
          '"client_id":"bpMT9xoHPbbh9kKuc1TBWQKwzCeFanJG",' +
          '"client_secret":"ENTER YOUR CLIENT SECRET HERE",' +
          '"audience":"https://horseracing/",' +
          '"grant_type":"client_credentials"' +
        '}',
        {
          headers: {'content-type': 'application/json'}
        });
    }
    // if token found in local storage then return that value
    // of() is an Observable method that returns an observable that returns the value inside the method
    return of({access_token: localStorage.getItem(this.localStorageTokenKey)});
  }
}
