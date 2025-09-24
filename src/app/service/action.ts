import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { GenericService } from './generic-service';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  constructor(private genericService: GenericService) {}

  getAll<T>(endpoint: string, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.genericService.get<T>(endpoint, options);
  }

  getById<T>(endpoint: string, id: string | number, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.genericService.get<T>(`${endpoint}/${id}`, options);
  }

  update<T>(endpoint: string, id: string | number, body: any, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.genericService.put<T>(`${endpoint}/${id}`, body, options);
  }

  delete<T>(endpoint: string, id: string | number, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.genericService.delete<T>(`${endpoint}/${id}`, options);
  }

  create<T>(endpoint: string, body: any, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.genericService.post<T>(endpoint, body, options);
  }

}