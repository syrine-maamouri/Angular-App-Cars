import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})

export class ApiCarsService {
  constructor(private http: HttpClient) {}

  apiUrl: string = "http://ergast.com/api/f1/2004/1/results.json";

  getCars() {
    return this.http.get(this.apiUrl);
  }
}
