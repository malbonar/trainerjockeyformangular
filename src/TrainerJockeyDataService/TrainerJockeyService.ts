import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../environments/environment";

import { TrainerJockey } from "../Models/TrainerJockey";

const apiUrl = environment.apiUrl + "TrainerJockeyForm";

@Injectable({
  providedIn: "root"
})
export class TrainerJockeyService {
  constructor(private http: HttpClient) {}

  getTrainerJockeyForm() {
    return this.http.get<TrainerJockey[]>(apiUrl);
  }
}
