import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {CustomHttpResponse, Profile} from "../interface/app-states";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly server: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  login$ = (email: string, password: string) :Observable<CustomHttpResponse<Profile>> => {
    return this.http.post<CustomHttpResponse<Profile>>(
      `${this.server}/user/login`,
      {email, password}
    )
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );
  }

  profile$ = () => {
    return this.http.get<Observable<CustomHttpResponse<Profile>>>(`${this.server}/user/profile`)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      )
  }
  private handleError(error: HttpErrorResponse) {
      let errorMessage: string;
      if(error.error instanceof ErrorEvent) {
        errorMessage = `A client error occurred - ${error.error.message}`;
      } else {
        if(error.error.reason) {
          errorMessage = error.error.reason;
        } else {
          errorMessage = `An error occurred - Error status ${error.status}`;
        }
      }

      return throwError(() => errorMessage);
    };
}
