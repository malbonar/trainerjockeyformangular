import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { TrainerJockey } from "../Models/TrainerJockey";

const apiUrl =
  "https://malstissue.azurewebsites.net/api/TrainerJockeyFormLines/Get14DayForm";

@Injectable({
  providedIn: "root"
})
export class TrainerJockeyService {
  constructor(private http: HttpClient) {}

  getTrainerJockeyForm() {
    return this.http.get<TrainerJockey[]>(apiUrl);
  }
}
