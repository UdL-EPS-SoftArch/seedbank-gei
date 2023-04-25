import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {Take} from "./take-model";

@Injectable({
  providedIn: 'root'
})
export class TakeService {

  constructor(private http: HttpClient) {}

  async createTake(amount: number, weight: number, location: string) {
    return new Promise((resolve, reject) => {
      const endpoint = "http://localhost:8080/takes"
      this.http.post(endpoint, { amount:  amount, weight: weight, location: location })
        .subscribe({
          next: (success) => {},
          error: (error) => reject(error),
          complete: () => resolve("Take created"),
        });
    });
  }


}
