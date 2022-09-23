import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { API_URL } from 'src/app/shared/constants';

type LoginArg = { email: string; password: string };
type SignupArg = {
  firstName: string;
  lastName: string;
  email: string;
  // password: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiUrl: API_URL, private http: HttpClient) {}

  private endpoint = this.apiUrl + 'users';
  private userLoggedIn: string | null = null;

  getUserLoggedIn() {
    return this.userLoggedIn;
  }

  isLoggedIn() {
    return !!this.userLoggedIn;
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  login(arg: LoginArg) {
    // the way we allow user to login is just to check whether
    // an account exists with the given email.
    // If so, the login is successful.

    const endpoint = `${this.endpoint}?email=${encodeURIComponent(arg.email)}`;
    return this.http.get<any[]>(endpoint).pipe(
      map((data) => data.length > 0 && data[0].id), // the request always returns an array, but it's an empty one if no account matches
      tap((userId: string) => (this.userLoggedIn = userId)),
      catchError(() => of(false))
    );
  }

  signup(arg: SignupArg) {
    // we emit "true" to indicate success
    return this.http.post(this.endpoint, arg).pipe(
      tap((user: any) => (this.userLoggedIn = user.id)),
      map(() => true), // no error occured hence the request is deemed successful
      catchError(() => of(false))
    );
  }
}
