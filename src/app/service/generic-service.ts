import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GenericService {
  
    private baseUrl = 'https://localhost:7008/api/'; 

  constructor(private http: HttpClient) {}


  get<T>(endpoint: string, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, options).pipe(
      catchError(this.handleError)
    );
  }

  post<T>(endpoint: string, body: any, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body, options).pipe(
      catchError(this.handleError)
    );
  }

  put<T>(endpoint: string, body: any, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, body, options).pipe(
      catchError(this.handleError)
    );
  }

  delete<T>(endpoint: string, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`, options).pipe(
      catchError(this.handleError)
    );
  }

  public handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {

      errorMessage = `Error: ${error.error.message}`;       // Client-side
    } else {

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;      // Server-side
    }
    return throwError(() => new Error(errorMessage));
  }
}
