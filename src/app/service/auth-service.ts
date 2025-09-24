import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
      private tokenKey = 'jwt_token';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
        const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE3MjYyMzkwMjJ9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'; // Fake JWT with exp in future
    return of({ token: mockToken }).pipe(
      tap((response: any) => this.setToken(response.token))
    );
    return this.http.post('/api/login', { username, password }).pipe(
      tap((response: any) => this.setToken(response.token))
    );

  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;
    try {
      const decoded: any = jwt_decode(token);
      return decoded.exp > Date.now() / 1000;
    } catch (e) {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    // this.router.navigate(['/login']);
  }
}
function jwt_decode(token: string): any {
  throw new Error('Function not implemented.');
}


